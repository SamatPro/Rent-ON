package ru.itis.renton.dto;

import lombok.Data;

@Data
public class ProfileDto {
    private String password;
    private String lastName;
    private String firstName;
    private Long phone;
    private String address;
}
