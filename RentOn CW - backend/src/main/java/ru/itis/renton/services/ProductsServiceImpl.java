package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.models.Product;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.PhotosRepository;
import ru.itis.renton.repositories.ProductsRepository;
import ru.itis.renton.repositories.UsersRepository;
import ru.itis.renton.security.providers.JwtTokenProvider;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private PhotosRepository photosRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public Long add(ProductDto productDto, Authentication authentication) {
        User user = (User) authentication.getPrincipal();

        Product product = Product.builder()
                .title(productDto.getTitle())
                .description(productDto.getDescription())
                .price(productDto.getPrice())
                .owner(user)
                .build();

        return productsRepository.save(product).getId();
    }

    @Override
    public Product get(Long id) {
        return productsRepository.findById(id).get();
    }

    @Override
    public List<ProductDto> getRecommendations(Authentication authentication) {
        if (authentication == null){
            return productsRepository.findAll().stream()
                    .map(product ->
                            ProductDto.builder()
                                    .id(product.getId())
                                    .title(product.getTitle())
                                    .description(product.getDescription())
                                    .price(product.getPrice())
                                    .image(
                                            product.getPhotos().isEmpty()
                                                    ? ""
                                                    : product.getPhotos().get(product.getPhotos().size()-1).getTitle()
                                    )
                                    .build()
                    )
                    .collect(Collectors.toList());
        }else {
            User user = (User) authentication.getPrincipal();
            return productsRepository.findAll().stream()
                    .filter(product ->
                            !product.getOwner().getId().equals(user.getId())
                    )
                    .map(product ->
                            ProductDto.builder()
                                    .id(product.getId())
                                    .title(product.getTitle())
                                    .description(product.getDescription())
                                    .price(product.getPrice())
                                    .image(
                                            product.getPhotos().isEmpty()
                                                    ? ""
                                                    : product.getPhotos().get(product.getPhotos().size() - 1).getTitle()
                                    )
                                    .build()
                    )
                    .collect(Collectors.toList());
        }
    }

    @Override
    @Transactional
    public void addToFavourite(Long productId, Authentication authentication) {
        User user = (User) authentication.getPrincipal();

        Product product = productsRepository.getProductById(productId);
        product.getCandidates().add(user);
//        user.getFavourites().add(product);
//        usersRepository.saveAndFlush(user);
        productsRepository.save(product);
        System.out.println("Saved");
    }
}
