package ru.itis.renton.services;

import org.springframework.security.core.Authentication;
import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.models.Product;

import java.util.List;

public interface ProductsService {
    Long add(ProductDto productDto, Authentication authentication);
    Product get(Long id);
    List<ProductDto> getRecommendations(Authentication authentication);
    Boolean addToFavourite(Long productId, Authentication authentication);
    List<ProductDto> getFavourites(Authentication authentication);
}
