package ru.itis.renton.dto;

import lombok.Data;

@Data
public class ProductDto {
    private Long id;
    private String title;
    private Double price;
    private String description;
}
