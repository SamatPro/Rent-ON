package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.itis.renton.dto.LoginDto;
import ru.itis.renton.dto.ProfileDto;
import ru.itis.renton.dto.TokenDto;
import ru.itis.renton.dto.UserDto;
import ru.itis.renton.forms.ProfileForm;
import ru.itis.renton.services.UserService;

@RestController
public class UsersController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody LoginDto loginDto) {
        return ResponseEntity.ok(userService.login(loginDto));
    }

    @PostMapping("/registration")
    public ResponseEntity<TokenDto> register(@RequestBody UserDto userDto) {
        try {
            userService.register(userDto);
            return ResponseEntity.ok().build();
        }catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

    @GetMapping(value = "/user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileDto> getUser(@PathVariable Long id,
                                              Authentication authentication){
        try{
            return ResponseEntity.ok(userService.getUser(authentication, id));
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/update")
    public ResponseEntity update(@RequestBody ProfileForm profileForm,
                                 Authentication authentication){
        try{
            userService.update(profileForm, authentication);
            return ResponseEntity.ok().build();
        }catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

    @GetMapping(value = "/user-info", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileDto> getUser(Authentication authentication){
        try{
            return ResponseEntity.ok(userService.getUser(authentication));
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().build();
        }
    }

}
