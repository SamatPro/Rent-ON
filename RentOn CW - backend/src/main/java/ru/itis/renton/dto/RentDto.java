package ru.itis.renton.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.Authentication;
import ru.itis.renton.models.Product;
import ru.itis.renton.models.Rent;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RentDto {
    private Long id;
    private UserDto ownerDto;
    private UserDto tenant;
    private ProductDto productDto;
    private Boolean isAccepted;
    private Timestamp dateOfDeal;
    private Timestamp endOfDeal;

    public static RentDto from(Rent rent, Authentication authentication){
        return RentDto.builder()
                .id(rent.getId())
                .dateOfDeal(rent.getDateOfDeal())
                .endOfDeal(rent.getEndOfDeal())
                .productDto(ProductDto.from(rent.getProduct(), authentication))
                .tenant(UserDto.from(rent.getTenant()))
                .ownerDto(UserDto.from(rent.getProduct().getOwner()))
                .isAccepted(rent.getIsAccepted())
                .build();
    }
}
