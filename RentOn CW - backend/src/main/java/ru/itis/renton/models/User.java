package ru.itis.renton.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import ru.itis.renton.security.role.Role;

import javax.persistence.*;
import java.util.List;

@Builder
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
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
    @JsonIgnore
    private String confirmString;

    @OneToMany(mappedBy = "tenant")
    @JsonIgnore
    private List<Order> orders;

    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private List<Comment> comments;

    @OneToMany(mappedBy = "owner")
    private List<Product> placements;

    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private List<Photo> profilePhoto;

    @ManyToMany
    @JsonIgnore
    private List<Product> favourites;
}


