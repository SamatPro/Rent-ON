package ru.itis.renton.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.Authentication;
import ru.itis.renton.models.Product;
import ru.itis.renton.models.User;

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
    private String category;
    private Boolean isFavourite;

    public static ProductDto from(Product product, Authentication authentication){
        ProductDto productDto = ProductDto.builder()
                .id(product.getId())
                .title(product.getTitle())
                .price(product.getPrice())
                .description(product.getDescription())
                .user(UserDto.from(product.getOwner()))
                .category(product.getCategory() == null ? "OTHER" : product.getCategory().name())
                .image(
                        product.getPhotos().isEmpty()
                                ? ""
                                : product.getPhotos().get(product.getPhotos().size()-1).getTitle()
                )
                .isFavourite(false)
                .build();

        if (authentication!=null){
            User candidate = (User) authentication.getPrincipal();
            if (product.getCandidates().stream().anyMatch(u -> (u.getId().equals(candidate.getId())))){
                productDto.setIsFavourite(true);
            }
        }
        return productDto;
    }
}
