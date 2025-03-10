package ru.itis.renton.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.itis.renton.models.User;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<User, Long> {
    Optional<User> getByLoginIgnoreCase(String login);
    boolean existsByLoginIgnoreCase(String login);
    Optional<User> findOneByConfirmString(String confirmString);
    Optional<User> findUserById(Long id);
}
