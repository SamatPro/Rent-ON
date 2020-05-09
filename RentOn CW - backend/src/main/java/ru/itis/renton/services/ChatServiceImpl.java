package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.itis.renton.dto.MessageDto;
import ru.itis.renton.dto.UserDto;
import ru.itis.renton.models.Message;
import ru.itis.renton.models.Rent;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.MessagesRepository;
import ru.itis.renton.repositories.RentsRepository;
import ru.itis.renton.repositories.UsersRepository;
import ru.itis.renton.security.providers.JwtTokenProvider;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private MessagesRepository repository;
    @Autowired
    private UsersRepository userRepository;
    @Autowired
    private RentsRepository rentsRepository;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public List<MessageDto> getHistory(Long rentId) {
        return repository.findAllByRentOrderByCreatedAtAsc(rentId).stream().map(message -> MessageDto.builder()
                .author(message.getUser().getFirstName())
                .message(message.getMessage())
                .timestamp(message.getTimestamp())
                .createdAt(message.getCreatedAt())
                .rentId(message.getRent().getId())
                .build()).collect(Collectors.toList());
    }

    @Override
    public Optional<Message> save(MessageDto messageDto) {
        User user = userRepository.findUserById(jwtTokenProvider.getUserIdFromJWT(messageDto.getAuthor())).get();
        Rent rent = rentsRepository.findById(messageDto.getId()).get();
        Message message = repository.save(Message.builder()
                .message(messageDto.getMessage())
                .user(user)
                .timestamp(messageDto.getTimestamp())
                .createdAt(messageDto.getCreatedAt())
                .rent(rent)
                .build());
        return Optional.of(message);
    }
}
