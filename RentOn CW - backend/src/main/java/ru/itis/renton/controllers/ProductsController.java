package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.services.ProductsService;

import java.util.List;

@RepositoryRestController
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    private @ResponseBody
    ResponseEntity<?> add(@RequestBody ProductDto productDto,
                                     Authentication authentication){
        return ResponseEntity.ok(
                new EntityModel<>(
                        productsService.add(productDto, authentication)));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<List<ProductDto>> getRecommendations(Authentication authentication){
        return ResponseEntity.ok(productsService.getRecommendations(authentication));
    }

    @GetMapping("/{id}")
    private ResponseEntity<ProductDto> get(@PathVariable Long id, Authentication authentication){
        return ResponseEntity.ok(ProductDto.from(productsService.get(id), authentication));
    }

    @PostMapping("/{id}/favourite")
    private ResponseEntity<Boolean> addToFavourites(@PathVariable Long id,
                                           Authentication authentication){
        return ResponseEntity.ok(productsService.addToFavourite(id, authentication));
    }

}
