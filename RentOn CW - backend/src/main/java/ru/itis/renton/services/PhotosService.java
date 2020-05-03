package ru.itis.renton.services;

import org.springframework.web.multipart.MultipartFile;
import ru.itis.renton.dto.PhotoDto;

public interface PhotosService {
    void savePhoto(MultipartFile photoDto);
}
