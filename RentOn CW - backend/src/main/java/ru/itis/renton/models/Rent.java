package ru.itis.renton.models;


import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
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
public class Rent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Product product;
    @ManyToOne
    private User tenant;

    private Timestamp dateOfDeal;
    private Timestamp endOfDeal;

    @OneToMany(mappedBy = "rent")
    private List<Message> messages;
}
