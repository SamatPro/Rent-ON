package ru.itis.renton.entries;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDbRecord {
    private Long id;
    private String title;
    private String price;
    private String description;
    private String category;
}
