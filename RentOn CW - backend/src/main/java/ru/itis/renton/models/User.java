package ru.itis.renton.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import ru.itis.renton.security.role.Role;

import javax.persistence.*;
import java.util.List;

@Builder
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "last_name")
    private String lastName;
    @Column(name = "first_name")
    private String firstName;

    private String address;

    private String login;
    private String passwordHash;

    @Enumerated(value = EnumType.STRING)
    private Role role;

    private Long phone;
    private Boolean isUserNonLocked;
    private Boolean isEmailConfirmed;
    private String confirmString;

    //    private List<Order> orders;
    @OneToMany(mappedBy = "owner")
    @JsonIgnore
    private List<Product> placements;

    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private List<Photo> profilePhoto;
}


