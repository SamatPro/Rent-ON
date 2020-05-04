package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.renton.dto.PhotoDto;
import ru.itis.renton.models.Photo;
import ru.itis.renton.repositories.PhotosRepository;
import ru.itis.renton.repositories.UsersRepository;
import ru.itis.renton.security.helper.JwtHelper;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.UUID;

@Service
public class PhotosServiceImpl implements PhotosService {

    private final String DIR = "uploads/";

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
    private PhotosRepository photosRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public String savePhoto(MultipartFile photo, String token) {
        PhotoDto photoDto = new PhotoDto();
        photoDto.setPhoto(photo);
        String fileName = UUID.randomUUID().toString().replaceAll("-", "")
                + UUID.randomUUID().toString().replaceAll("-", "")
                + "."
                + photoDto.getPhoto().getOriginalFilename().split("\\.")[1];

        try {
            byte[] bytes = photoDto.getPhoto().getBytes();
            BufferedOutputStream stream =
                    new BufferedOutputStream(
                            new FileOutputStream(
                                    new File(DIR + fileName)
                            )
                    );
            stream.write(bytes);
            stream.close();
        } catch (Exception e) {
            throw new IllegalArgumentException("Вам не удалось загрузить изображение ");
        }
        bindPhoto(token, fileName);
        return fileName;
    }

    private void bindPhoto(String token, String name) {
        Long userId = Long.valueOf(jwtHelper.getUserId(token));
        Photo photo = Photo.builder()
                .author(usersRepository.findUserById(userId).get())
                .name(name)
                .build();
        photosRepository.save(photo);
    }
}
