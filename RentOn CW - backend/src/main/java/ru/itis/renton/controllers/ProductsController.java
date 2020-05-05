package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.models.Product;
import ru.itis.renton.services.ProductsService;

@RestController
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @PostMapping("/product/add")
    private ResponseEntity<Long> add(@RequestBody ProductDto productDto,
                               @RequestHeader("AUTH") String token){
        return ResponseEntity.ok(productsService.add(productDto, token));
    }

    @GetMapping("/product/{id}")
    private ResponseEntity<ProductDto> get(@PathVariable("id") Long id){
        return ResponseEntity.ok(ProductDto.from(productsService.get(id)));
    }
}
