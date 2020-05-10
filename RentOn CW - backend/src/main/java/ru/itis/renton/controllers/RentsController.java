package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.itis.renton.dto.RentDto;
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
        try {
            return ResponseEntity.ok(rentsService.getRent(rentId, authentication));
        }catch (AccessDeniedException e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

    @GetMapping("/feedbacks")
    public ResponseEntity<List<RentDto>> getFeedbacks(Authentication authentication){
        if (authentication != null){
            List<RentDto> rentDtos= rentsService.getFeedbacks(authentication);
            if (!rentDtos.isEmpty()){
                return ResponseEntity.ok(rentDtos);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/feedback/{id}")
    public ResponseEntity<RentDto> getFeedback(@PathVariable("id") Long rentId,
                                               Authentication authentication){
        try {
            return ResponseEntity.ok(rentsService.getFeedback(rentId, authentication));
        }catch (AccessDeniedException e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

    @PutMapping("/feedback/{id}/accept")
    public ResponseEntity<RentDto> accept(@PathVariable("id") Long rentId,
                                          @RequestParam String status,
                                          Authentication authentication){
        Boolean st = Boolean.valueOf(status);
        try {
            return ResponseEntity.ok(rentsService.accept(rentId, st, authentication));
        }catch (AccessDeniedException e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

}
