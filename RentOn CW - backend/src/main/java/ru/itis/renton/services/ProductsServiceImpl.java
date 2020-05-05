package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.models.Product;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.ProductsRepository;
import ru.itis.renton.repositories.UsersRepository;
import ru.itis.renton.security.helper.JwtHelper;

@Service
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private JwtHelper jwtHelper;

    @Override
    public void add(ProductDto productDto, String token) {
        Long userId = Long.valueOf(jwtHelper.getUserId(token));
        User user = usersRepository.findUserById(userId).get();

        Product product = Product.builder()
                .title(productDto.getTitle())
                .description(productDto.getDescription())
                .price(productDto.getPrice())
                .owner(user)
                .build();
        productsRepository.save(product);
    }
}
