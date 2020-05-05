package ru.itis.renton.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.itis.renton.models.Product;
import ru.itis.renton.models.User;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDto {
    private Long id;
    private String title;
    private Double price;
    private String description;
    private User user;
    private String image;

    public static ProductDto from(Product product){
        ProductDto productDto = ProductDto.builder()
                .id(product.getId())
                .title(product.getTitle())
                .price(product.getPrice())
                .description(product.getDescription())
                .user(product.getOwner())
                .build();
        if (!product.getPhotos().isEmpty()){
            productDto.setImage(product.getPhotos().get(product.getPhotos().size()-1).getTitle());
        }
        return productDto;
    }
}
