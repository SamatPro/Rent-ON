package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.itis.renton.dto.RentDto;
import ru.itis.renton.models.Rent;
import ru.itis.renton.services.RentsService;

import java.util.List;

@RestController
public class RentsController {

    @Autowired
    private RentsService rentsService;

    @PostMapping("/products/{id}/rent")
    public ResponseEntity<Long> rent(@PathVariable("id") Long productId, Authentication authentication){
        return ResponseEntity.ok(rentsService.rent(productId, authentication));
    }

    @GetMapping("/rents")
    public ResponseEntity<List<RentDto>> getRents(Authentication authentication){
        if (authentication != null){
            return ResponseEntity.ok(rentsService.getRents(authentication));
        }else {
            return ResponseEntity.status(401).build();
        }
    }

    @GetMapping("/rent/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<RentDto> getRent(@PathVariable("id") Long rentId, Authentication authentication){
        return ResponseEntity.ok(rentsService.getRent(rentId, authentication));
    }



    @PutMapping
    public ResponseEntity update(){
        return ResponseEntity.ok().build();
    }

}
