package ru.itis.renton.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER)
    private List<Photo> photos;

    @ManyToOne
    private User owner;

    @OneToMany(mappedBy = "product")
    private List<Comment> comments;

    @ElementCollection(targetClass = Category.class)
    @CollectionTable(
            name = "category",
            joinColumns = @JoinColumn(name = "product_id")
    )
    @Column(name = "category_id")
    private Set<Category> categories;

    @Enumerated(value = EnumType.STRING)
    private State state;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Rent> rents;

    @ManyToMany(mappedBy = "favourites")
    @JsonIgnore
    private List<User> candidates;
}
