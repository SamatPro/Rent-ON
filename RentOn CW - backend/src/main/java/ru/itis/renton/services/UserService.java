package ru.itis.renton.services;


import ru.itis.renton.dto.UserDto;

public interface UserService {
    String login(String username, String password);
    void register(UserDto user);
}
