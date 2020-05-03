package ru.itis.renton.services;


import ru.itis.renton.dto.ProfileDto;
import ru.itis.renton.dto.UserDto;
import ru.itis.renton.models.User;

public interface UserService {
    String login(String username, String password);
    void register(UserDto user);
    void update(ProfileDto profileDto, String tokenDto);
    User getUser(String token, Long id);
}
