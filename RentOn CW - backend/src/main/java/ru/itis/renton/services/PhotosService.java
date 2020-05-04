package ru.itis.renton.services;

import org.springframework.web.multipart.MultipartFile;

public interface PhotosService {
    String savePhoto(MultipartFile photoDto, String token);
}
