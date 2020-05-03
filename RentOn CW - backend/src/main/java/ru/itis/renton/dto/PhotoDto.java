package ru.itis.renton.dto;

import lombok.Data;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Data
@Setter
public class PhotoDto {
    private MultipartFile photo;
}
