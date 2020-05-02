package ru.itis.renton.services;

public interface EmailService {
    void sendMail(String subject, String text, String email);
}
