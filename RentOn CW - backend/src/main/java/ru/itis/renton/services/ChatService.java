package ru.itis.renton.services;

import ru.itis.renton.dto.MessageDto;
import ru.itis.renton.models.Message;

import java.util.List;
import java.util.Optional;

public interface ChatService {
    List<MessageDto> getHistory(Long rentId);
    Optional<Message> save(MessageDto messageDto);
}
