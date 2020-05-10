package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import ru.itis.renton.dto.RentDto;
import ru.itis.renton.models.Product;
import ru.itis.renton.models.Rent;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.ProductsRepository;
import ru.itis.renton.repositories.RentsRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RentsServiceImpl implements RentsService {

    @Autowired
    private RentsRepository rentsRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public Long rent(Long productId, Authentication authentication) {
        User tenant = (User) authentication.getPrincipal();
        //Если этот товар размещен пользователем или уже в арендовал
        if (tenant.getPlacements().stream().noneMatch(product -> product.getId().equals(productId)) &&
                tenant.getRents().stream().noneMatch(rent -> (rent.getProduct().getId().equals(productId)))){
            Rent rent = Rent.builder()
                    .product(productsRepository.findById(productId).get())
                    .tenant(tenant)
                    .build();
            return rentsRepository.save(rent).getId();
        }
        throw new IllegalArgumentException("Repeated rental request or owner product");
    }

    @Override
    public List<RentDto> getRents(Authentication authentication) {
        User tenant = (User) authentication.getPrincipal();
        return tenant.getRents().stream()
                .map(rent -> RentDto.from(rent, authentication))
                .collect(Collectors.toList());
    }

    @Override
    public RentDto getRent(Long id, Authentication authentication) {
        if(authentication != null){
            User tenant = (User) authentication.getPrincipal();
            if (tenant.getRents().stream().anyMatch(rent -> rent.getId().equals(id))){
                return RentDto.from(rentsRepository.findById(id).get(), authentication);
            }
        }
        throw new AccessDeniedException("Access denied to rent");
    }

    @Override
    public List<RentDto> getFeedbacks(Authentication authentication) {

        User landlord = (User) authentication.getPrincipal();
        List<Rent> rents = new ArrayList<>();
        landlord.getPlacements().stream()
                .forEach(product -> rents.addAll(product.getRents()));

        return rents.stream().map(rent -> RentDto.from(rent, authentication)).collect(Collectors.toList());

    }

    @Override
    public RentDto getFeedback(Long id, Authentication authentication) {
        if(authentication != null){
            User landlord = (User) authentication.getPrincipal();
            Rent rent = rentsRepository.findById(id).get();
            if (rent.getProduct().getOwner().getId().equals(landlord.getId())){
                return RentDto.from(rent, authentication);
            }
        }
        throw new AccessDeniedException("Access denied to rent");
    }

    @Override
    public RentDto accept(Long id, Boolean status, Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        if (user.getPlacements().stream()
                .anyMatch(product -> product.getRents().stream()
                        .anyMatch(rent -> rent.getId().equals(id)))){
            Rent rent = rentsRepository.findById(id).get();
            rent.setIsAccepted(status);
            return RentDto.from(rentsRepository.save(rent), authentication);
        }
        throw new AccessDeniedException("Access denied to feedback");
    }
}
