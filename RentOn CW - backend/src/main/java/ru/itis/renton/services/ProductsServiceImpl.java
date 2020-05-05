package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.models.Photo;
import ru.itis.renton.models.Product;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.PhotosRepository;
import ru.itis.renton.repositories.ProductsRepository;
import ru.itis.renton.repositories.UsersRepository;
import ru.itis.renton.security.helper.JwtHelper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private PhotosRepository photosRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private JwtHelper jwtHelper;

    @Override
    public Long add(ProductDto productDto, String token) {
        Long userId = Long.valueOf(jwtHelper.getUserId(token));
        User user = usersRepository.findUserById(userId).get();


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
}
