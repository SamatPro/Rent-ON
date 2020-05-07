package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.renton.models.Photo;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.PhotosRepository;
import ru.itis.renton.repositories.ProductsRepository;
import ru.itis.renton.repositories.UsersRepository;
import ru.itis.renton.security.providers.JwtTokenProvider;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.UUID;

@Service
public class PhotosServiceImpl implements PhotosService {

    private final String DIR = "uploads/";

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private PhotosRepository photosRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public String savePhoto(MultipartFile photo, Authentication authentication) {
        String fileName = writeFile(photo);
        bindWithUser(authentication, fileName);
        return fileName;
    }

    @Override
    public String savePhoto(MultipartFile photo, Long productId) {
        String fileName = writeFile(photo);
        bindWithProduct(fileName, productId);
        return fileName;
    }

    private void bindWithProduct(String fileName, Long productId){
        Photo photo = Photo.builder()
                .title(fileName)
                .product(productsRepository.findById(productId).get())
                .build();
        photosRepository.save(photo);
    }

    private void bindWithUser(Authentication authentication, String fileName) {
        Photo photo = Photo.builder()
                .author((User) authentication.getPrincipal())
                .title(fileName)
                .build();
        photosRepository.save(photo);
    }

    private String writeFile(MultipartFile file){
        String fileName = UUID.randomUUID().toString().replaceAll("-", "")
                + UUID.randomUUID().toString().replaceAll("-", "")
                + "."
                + file.getOriginalFilename().split("\\.")[1];

        try {
            byte[] bytes = file.getBytes();
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
        return fileName;
    }

}
