package ru.itis.renton.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.itis.renton.models.Rent;

@Repository
public interface RentsRepository extends JpaRepository<Rent, Long> {
}
