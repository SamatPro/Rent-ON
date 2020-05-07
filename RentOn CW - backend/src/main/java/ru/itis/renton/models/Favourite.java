package ru.itis.renton.models;


import lombok.*;

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
@Table
public class Favourite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Product product;
    @ManyToMany(mappedBy = "favourites")
    private List<User> candidates;
}
