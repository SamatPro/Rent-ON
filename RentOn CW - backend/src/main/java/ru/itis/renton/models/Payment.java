package ru.itis.renton.models;

import lombok.*;

import javax.persistence.*;

@Builder
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double sum;
    @OneToOne(mappedBy = "payment")
    private Rent rent;

    private Boolean paid;
}
