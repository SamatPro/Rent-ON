package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.itis.renton.dto.MessageDto;
import ru.itis.renton.services.ChatService;

import java.sql.Timestamp;
import java.util.List;

@RestController
public class MessagesController {
    @Autowired
    private ChatService chatService;
    @Autowired
    private SimpMessagingTemplate template;

    @MessageMapping("/room/{rentId}")
    @SendTo("/room/{rentId}")
    public MessageDto getMessage(@DestinationVariable String rentId,
                                 @Payload MessageDto message) {
//        System.out.println(message.getMessage());
        message.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        message.setTimestamp(Long.toString(System.currentTimeMillis()));
        message.setRentId(Long.valueOf(rentId.substring(5)));
        chatService.save(message);
        return message;
    }

    @RequestMapping("/history/{rentId}")
    public List<MessageDto> getChatHistory(@PathVariable Long rentId) {
        return chatService.getHistory(rentId);
    }
}
