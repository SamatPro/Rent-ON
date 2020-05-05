package ru.itis.renton.services;

import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.models.Product;

public interface ProductsService {
    Long add(ProductDto productDto, String token);
    Product get(Long id);
}
