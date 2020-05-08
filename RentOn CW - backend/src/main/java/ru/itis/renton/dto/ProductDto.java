package ru.itis.renton.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.Authentication;
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
    private UserDto user;
    private String image;
    private Boolean isFavourite;

    public static ProductDto from(Product product, Authentication authentication){
        ProductDto productDto = ProductDto.builder()
                .id(product.getId())
                .title(product.getTitle())
                .price(product.getPrice())
                .description(product.getDescription())
                .user(UserDto.from(product.getOwner()))
                .image(
                        product.getPhotos().isEmpty()
                                ? ""
                                : product.getPhotos().get(product.getPhotos().size()-1).getTitle()
                )
                .isFavourite(false)
                .build();
//        if (!product.getPhotos().isEmpty()){
//            productDto.setImage(product.getPhotos().get(product.getPhotos().size()-1).getTitle());
//        }
        if (authentication!=null){
            User candidate = (User) authentication.getPrincipal();
            if (product.getCandidates().stream().anyMatch(u -> (u.getId().equals(candidate.getId())))){
                productDto.setIsFavourite(true);
            }
        }
        return productDto;
    }
}
