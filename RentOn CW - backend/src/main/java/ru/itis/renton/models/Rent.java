package ru.itis.renton.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Builder
@ToString(exclude = {"tenant", "messages"})
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
    @JsonIgnore
    private Product product;
    @ManyToOne
    @JsonIgnore
    private User tenant;

    private Boolean isAccepted;

    private Timestamp dateOfDeal;
    private Timestamp endOfDeal;

    @OneToMany(mappedBy = "rent")
    private List<Message> messages;

    @OneToOne
    private Payment payment;
}
