package ru.itis.renton.forms;

import lombok.Data;

@Data
public class ProfileForm {
    private String password;
    private String lastName;
    private String firstName;
    private Long phone;
    private String address;
}
