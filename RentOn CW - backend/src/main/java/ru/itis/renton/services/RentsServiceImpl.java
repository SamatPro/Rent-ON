package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import ru.itis.renton.dto.RentDto;
import ru.itis.renton.models.Product;
import ru.itis.renton.models.Rent;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.ProductsRepository;
import ru.itis.renton.repositories.RentsRepository;

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
        return RentDto.from(rentsRepository.findById(id).get(), authentication);
    }
}
