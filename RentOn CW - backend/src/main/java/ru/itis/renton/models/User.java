package ru.itis.renton.models;

import lombok.*;
import ru.itis.renton.security.role.Role;

import javax.persistence.*;
import java.util.List;

@Builder
@Getter
@Setter
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String lastName;
    private String firstName;

    private String address;

    @Column(length = 1000)
    private String login;
    private String passwordHash;

    @Enumerated(value = EnumType.STRING)
    private Role role;

    private Long phone;
    private Boolean isUserNonLocked;
    private Boolean isEmailConfirmed;
    private String confirmString;

//    private List<Order> orders;
//    private List<Product> placements;
    @OneToMany(mappedBy = "author")
    private List<Photo> profilePhoto;
}
