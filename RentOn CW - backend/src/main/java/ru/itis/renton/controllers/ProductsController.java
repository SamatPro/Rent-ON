package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.services.ProductsService;

@RestController
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @PostMapping("/product/add")
    private ResponseEntity add(@RequestBody ProductDto productDto,
                               @RequestHeader("AUTH") String token){
        productsService.add(productDto, token);
        return ResponseEntity.ok().build();
    }
}
