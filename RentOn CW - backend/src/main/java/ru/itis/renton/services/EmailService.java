package ru.itis.renton.services;

import ru.itis.renton.models.User;

public interface EmailService {
    void sendMail(String subject, String text, String email);
    void registration(Long id);
//    void registration(User user); - не работает(
}
