package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.renton.services.PhotosService;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@RestController
public class PhotosController {

    @Autowired
    private PhotosService photosService;

    @PostMapping(value = "/image-upload")
    public ResponseEntity<String> uploadProfilePhoto(@RequestParam("file") MultipartFile photoDto,
                                                     Authentication authentication){
        if (!photoDto.isEmpty()) {
            System.out.println("saving");
            String fileName = photosService.savePhoto(photoDto, authentication);
            return ResponseEntity.ok(fileName);
        }else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value = "/product-image-upload")
    public ResponseEntity<String> uploadProductPhoto(@RequestParam("file") MultipartFile photoDto,
                                              @RequestParam("productId") Long productId){
        if (!photoDto.isEmpty()) {
            System.out.println("saving product photo");
            String fileName = photosService.savePhoto(photoDto, productId);
            System.out.println(fileName);
            return ResponseEntity.ok(fileName);
        }else {
            return ResponseEntity.badRequest().build();
        }
    }


    @GetMapping("/image/{fileName:.+}")
    public ResponseEntity downloadFile(@PathVariable String fileName) throws IOException {

        File file = new File("uploads/"+fileName);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        System.out.println("sending photo");
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(file.length())
                .body(resource);
    }






}
