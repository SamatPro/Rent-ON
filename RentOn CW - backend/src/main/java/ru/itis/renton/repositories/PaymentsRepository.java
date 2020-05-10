package ru.itis.renton.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.itis.renton.models.Payment;

@Repository
public interface PaymentsRepository extends JpaRepository<Payment, Long> {
}
