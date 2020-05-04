package ru.itis.renton.controllers;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.renton.dto.PhotoDto;
import ru.itis.renton.services.PhotosService;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@RestController
public class PhotosController {

    @Autowired
    private PhotosService photosService;

    @PostMapping(value = "/image-upload", produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ApiOperation(value = "Make a POST request to upload the file",
            produces = "application/json", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadPhoto(@RequestParam("file") MultipartFile photoDto,
                                      @RequestHeader("AUTH") String token){
        System.out.println(token);
        if (!photoDto.isEmpty()) {
            System.out.println("saving");
            String fileName = photosService.savePhoto(photoDto, token);
            return ResponseEntity.ok(fileName);
        }else {
            return ResponseEntity.badRequest().build();
        }
    }


    @GetMapping("/image/{fileName:.+}")
    public ResponseEntity downloadFile(@PathVariable String fileName) throws IOException {

        File file = new File("uploads/"+fileName);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(file.length())
                .body(resource);
    }




}
