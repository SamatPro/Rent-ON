package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.renton.dto.PhotoDto;
import ru.itis.renton.models.Photo;
import ru.itis.renton.repositories.PhotosRepository;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.UUID;

@Service
public class PhotosServiceImpl implements PhotosService {

    private final String DIR = "uploads/";

    @Autowired
    private PhotosRepository photosRepository;

    @Override
    public void savePhoto(MultipartFile photo) {
        PhotoDto photoDto = new PhotoDto();
        photoDto.setPhoto(photo);
        String fileName = DIR
                + UUID.randomUUID().toString().replaceAll("-", "")
                + UUID.randomUUID().toString().replaceAll("-", "")
                + "."
                + photoDto.getPhoto().getOriginalFilename().split("\\.")[1];

        try {
            byte[] bytes = photoDto.getPhoto().getBytes();
            BufferedOutputStream stream =
                    new BufferedOutputStream(
                            new FileOutputStream(
                                    new File(fileName)
                            )
                    );
            stream.write(bytes);
            stream.close();
        } catch (Exception e) {
            throw new IllegalArgumentException("Вам не удалось загрузить изображение ");
        }
    }
}
