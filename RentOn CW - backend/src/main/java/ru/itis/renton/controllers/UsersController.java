package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.itis.renton.dto.LoginDto;
import ru.itis.renton.dto.ProfileDto;
import ru.itis.renton.dto.TokenDto;
import ru.itis.renton.dto.UserDto;
import ru.itis.renton.models.User;
import ru.itis.renton.services.UserService;

@RestController
public class UsersController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody LoginDto loginDto) {
        return ResponseEntity.ok(TokenDto.from(userService.login(loginDto.getLogin(), loginDto.getPassword())));
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

//    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping(value = "/user/{id}")
    public ResponseEntity<User> getCurrentUser(@PathVariable Long id,
                                               @RequestHeader("AUTH") String token){
        try{
            System.out.println(token +"   " + id.toString());
            User user = userService.getUser(token, id);
            return ResponseEntity.ok(user);
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/update")
    public ResponseEntity update(@RequestBody ProfileDto profileDto,
                                 @RequestHeader("AUTH") String token){
        try{
            userService.update(profileDto, token);
            return ResponseEntity.ok().build();
        }catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

}
