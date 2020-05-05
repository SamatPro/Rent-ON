package ru.itis.renton.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Builder
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private Double price;
    private String description;

    @OneToMany(mappedBy = "product")
    private List<Photo> photos;

    @ManyToOne
    private User owner;


//    private List<Comment> comments;
//    private Set<Category> categories;

    @Enumerated(value = EnumType.STRING)
    private State state;
}
