package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.itis.renton.dto.ProfileDto;
import ru.itis.renton.dto.TokenDto;
import ru.itis.renton.dto.UserDto;
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
    public String login(String login, String password) {
        Optional<User> candidate = usersRepository.getByLoginIgnoreCase(login);
        if (candidate.isPresent()) {
            User user = candidate.get();
            if (encoder.matches(password, user.getPasswordHash())) {
                return jwtHelper.createToken(user);
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
    public void update(ProfileDto userDto, String token) {
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
    public User getUser(String token, Long id) {
        Long currentUserId = Long.valueOf(jwtHelper.getUserId(token));
        if (id.equals(currentUserId)){
            return usersRepository.getOne(id);
        }else {
            Optional<User> otherOptional = usersRepository.findUserById(id);
            if (otherOptional.isPresent()){
                User otherUser = User.builder()
                .firstName(otherOptional.get().getFirstName())
                .lastName(otherOptional.get().getLastName())
                .address(otherOptional.get().getAddress())
                .phone(otherOptional.get().getPhone())
                .build();

                List<Photo> photos = otherOptional.get().getProfilePhoto();
                if (!photos.isEmpty()){
                    otherUser.setProfilePhoto(asList(photos.get(photos.size()-1)));
                }
                return otherUser;
            }
        }
        throw new IllegalArgumentException();
    }


}
