package ru.itis.renton.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@ToString(exclude = {"author", "product"})
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "photos")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String title;

    @ManyToOne
    @JsonIgnore
    private User author;

    @ManyToOne
    @JsonIgnore
    private Product product;
}
