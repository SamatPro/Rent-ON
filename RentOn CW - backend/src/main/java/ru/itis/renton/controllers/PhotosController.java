package ru.itis.renton.controllers;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.renton.dto.PhotoDto;
import ru.itis.renton.services.PhotosService;

@RestController
public class PhotosController {

    @Autowired
    private PhotosService photosService;

    @PostMapping(value = "/image-upload", produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ApiOperation(value = "Make a POST request to upload the file",
            produces = "application/json", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadPhoto(@RequestParam("file") MultipartFile photoDto){
        if (!photoDto.isEmpty()) {
            System.out.println("saving");
            photosService.savePhoto(photoDto);
        }
        return ResponseEntity.ok().build();
    }
}
