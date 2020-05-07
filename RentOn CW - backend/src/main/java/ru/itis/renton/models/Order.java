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
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Product product;
    @ManyToOne
    private User tenant;
    @OneToOne
    private Deal deal;

    @OneToMany(mappedBy = "order")
    private List<Message> messages;
}
