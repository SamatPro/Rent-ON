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
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User user;
    private String message;
    private Timestamp createdAt;

    @ManyToOne
    private Rent rent;

    private String timestamp;
}
