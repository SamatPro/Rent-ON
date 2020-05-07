package ru.itis.renton.services;

import org.springframework.security.core.Authentication;
import org.springframework.web.multipart.MultipartFile;

public interface PhotosService {
    String savePhoto(MultipartFile photoDto, Authentication authentication);
    String savePhoto(MultipartFile photoDto, Long productId);
}
