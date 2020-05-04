package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.itis.renton.dto.ProfileDto;
import ru.itis.renton.dto.TokenDto;
import ru.itis.renton.dto.UserDto;
import ru.itis.renton.forms.ProfileForm;
import ru.itis.renton.models.Photo;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.UsersRepository;
import ru.itis.renton.security.helper.JwtHelper;
import ru.itis.renton.security.role.Role;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static java.util.Arrays.asList;

@Service
@Transactional
public class UsersServiceImpl implements UserService {

    private final String HEADER = "";
    private final String FOOTER = "";

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private EmailService emailService;

    @Override
    public TokenDto login(String login, String password) {
        Optional<User> candidate = usersRepository.getByLoginIgnoreCase(login);
        if (candidate.isPresent()) {
            User user = candidate.get();
            if (encoder.matches(password, user.getPasswordHash())) {
                String token = jwtHelper.createToken(user);
                return TokenDto.from(token, user.getId());
            }
        }
        throw new IllegalArgumentException("Login attempt failed");
    }

    @Override
    public void register(UserDto userDto) {
        String confirmString = UUID.randomUUID().toString();

        User userToSave = User.builder()
                .login(userDto.getLogin())
                .passwordHash(encoder.encode(userDto.getPassword()))
                .lastName(userDto.getLastName())
                .firstName(userDto.getFirstName())
                .phone(userDto.getPhone())
                .address(userDto.getAddress())
                .role(Role.USER)
                .isUserNonLocked(true)
                .isEmailConfirmed(false)
                .confirmString(confirmString)
                .build();

        if (!usersRepository.existsByLoginIgnoreCase(userToSave.getLogin())) {
            User user = usersRepository.saveAndFlush(userToSave);
            String text = "<a href='http://localhost:3000/confirm/" + user.getConfirmString() + "'>" +"Пройдите по ссылке" + "</a>";
            emailService.sendMail("Подтвреждение регистрации", text, user.getLogin());
            return;
        }
        throw new IllegalArgumentException("Register attempt failed");
    }

    @Override
    public void update(ProfileForm userDto, String token) {
        String login = jwtHelper.getUsername(token);

        Optional<User> candidate = usersRepository.getByLoginIgnoreCase(login);
        if (candidate.isPresent()) {
            User user = candidate.get();
            if (!userDto.getPassword().isEmpty()){
                user.setPasswordHash(encoder.encode(userDto.getPassword()));
            }
            user.setLastName(userDto.getLastName());
            user.setFirstName(userDto.getFirstName());
            user.setPhone(userDto.getPhone());
            user.setAddress(userDto.getAddress());
            usersRepository.save(user);
            return;
        }
        throw new IllegalArgumentException("User updating attempt failed");
    }

    @Override
    @Transactional
    public ProfileDto getUser(String token, Long id) {
        Long currentUserId = Long.valueOf(jwtHelper.getUserId(token));
        Optional<User> userOptional = usersRepository.findUserById(id);
        if (userOptional.isPresent()){
            User user = userOptional.get();
//            .firstName(otherOptional.get().getFirstName())
//            .lastName(otherOptional.get().getLastName())
//            .address(otherOptional.get().getAddress())
//            .phone(otherOptional.get().getPhone())
//            .build();
            ProfileDto profileDto = ProfileDto.builder()
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .address(user.getAddress())
                    .phone(user.getPhone())
                    .build();
            List<Photo> photos = user.getProfilePhoto();
            if (!photos.isEmpty()){
                profileDto.setImage(photos.get(photos.size()-1).getName());
            }
            return profileDto;
        }

        throw new IllegalArgumentException();
    }

    @Override
    @Transactional
    public ProfileDto getUser(String token) {
        Long userId = Long.valueOf(jwtHelper.getUserId(token));
        Optional<User> userOptional = usersRepository.findUserById(userId);
        if (userOptional.isPresent()){
            List<Photo> photos = userOptional.get().getProfilePhoto();
            User user = userOptional.get();
            ProfileDto profileDto = ProfileDto.builder()
                    .login(user.getLogin())
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .address(user.getAddress())
                    .phone(user.getPhone())
                    .build();
            if (!photos.isEmpty()){
                profileDto.setImage(photos.get(photos.size()-1).getName());
            }
            return profileDto;
        }
        throw new IllegalArgumentException();
    }
}
