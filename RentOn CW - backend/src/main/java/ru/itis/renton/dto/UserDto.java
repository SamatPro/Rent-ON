package ru.itis.renton.dto;

import lombok.Builder;
import lombok.Data;

import java.sql.Date;

@Data
public class UserDto {
    private String login;
    private String password;
    private String lastName;
    private String firstName;
    private Long phone;
    private String address;

}
