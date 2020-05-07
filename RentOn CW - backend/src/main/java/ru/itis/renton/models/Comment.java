package ru.itis.renton.models;

import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;


@Builder
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String text;
    private Integer rating;
    private Timestamp datetime;

    @ManyToOne
    private User author;

    @ManyToOne
    private Product product;
}
