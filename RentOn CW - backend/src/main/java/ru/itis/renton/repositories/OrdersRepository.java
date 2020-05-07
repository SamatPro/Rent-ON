package ru.itis.renton.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.itis.renton.models.Order;

@Repository
public interface OrdersRepository extends JpaRepository<Order, Long> {
}
