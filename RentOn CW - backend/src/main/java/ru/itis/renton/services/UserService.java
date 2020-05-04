package ru.itis.renton.services;


import ru.itis.renton.dto.ProfileDto;
import ru.itis.renton.dto.TokenDto;
import ru.itis.renton.dto.UserDto;
import ru.itis.renton.forms.ProfileForm;

public interface UserService {
    TokenDto login(String username, String password);
    void register(UserDto user);
    void update(ProfileForm profileForm, String tokenDto);
    ProfileDto getUser(String token, Long id);
    ProfileDto getUser(String token);
}
