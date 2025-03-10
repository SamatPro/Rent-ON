package ru.itis.renton.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProfileDto {
    private Long id;
    private String login;
    private String password;
    private String lastName;
    private String firstName;
    private Long phone;
    private String address;
    private String image;
}
