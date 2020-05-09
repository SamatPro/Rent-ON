package ru.itis.renton.services;


import org.springframework.security.core.Authentication;
import ru.itis.renton.dto.LoginDto;
import ru.itis.renton.dto.ProfileDto;
import ru.itis.renton.dto.TokenDto;
import ru.itis.renton.dto.UserDto;
import ru.itis.renton.forms.ProfileForm;

public interface UserService {
    TokenDto login(LoginDto loginDto);
    void register(UserDto user);
    void update(ProfileForm profileForm, Authentication authentication);
    ProfileDto getUser(Authentication authentication, Long id);
    ProfileDto getUser(Authentication authentication);

}
