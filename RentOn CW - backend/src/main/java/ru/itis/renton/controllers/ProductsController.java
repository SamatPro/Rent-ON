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

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Long> add(@RequestBody ProductDto productDto,
                                     Authentication authentication){
        return ResponseEntity.ok(
                        productsService.add(productDto, authentication));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ProductDto>> getRecommendations(Authentication authentication){
        return ResponseEntity.ok(productsService.getRecommendations(authentication));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> get(@PathVariable Long id, Authentication authentication){
        return ResponseEntity.ok(ProductDto.from(productsService.get(id), authentication));
    }

    @PostMapping("/{id}/favourite")
    public ResponseEntity<Boolean> addToFavourites(@PathVariable Long id,
                                           Authentication authentication){
        return ResponseEntity.ok(productsService.addToFavourite(id, authentication));
    }

    @GetMapping("/favourites")
    public ResponseEntity<List<ProductDto>> getFavourites(Authentication authentication){
        if (authentication != null){
            return ResponseEntity.ok(productsService.getFavourites(authentication));
        }
        else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<ProductDto>> getByQuery(@RequestParam("query") String query,
                                                       Authentication authentication){
        return ResponseEntity.ok(productsService.getProductsByQuery(query, authentication));
    }

}
