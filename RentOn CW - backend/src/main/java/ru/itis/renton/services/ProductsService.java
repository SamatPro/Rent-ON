package ru.itis.renton.services;

import ru.itis.renton.dto.ProductDto;

public interface ProductsService {
    void add(ProductDto productDto, String token);
}
