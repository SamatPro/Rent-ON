package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.services.ProductsService;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @PostMapping("/add")
    private ResponseEntity<Long> add(@RequestBody ProductDto productDto,
                                     Authentication authentication){
        return ResponseEntity.ok(productsService.add(productDto, authentication));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<List<ProductDto>> getRecommendations(Authentication authentication){
        return ResponseEntity.ok(productsService.getRecommendations(authentication));
    }

    @GetMapping("/{id:[0-9].+}")
    private ResponseEntity<ProductDto> get(@PathVariable Long id){
        return ResponseEntity.ok(ProductDto.from(productsService.get(id)));
    }
}
