package ru.itis.renton.entries;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDbRecord {
    private Long id;
    private String firstName;
    private String lastName;
    private String login;
    private String role;
}
