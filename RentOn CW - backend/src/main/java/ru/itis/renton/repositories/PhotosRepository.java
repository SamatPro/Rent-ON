package ru.itis.renton.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.itis.renton.models.Photo;

@Repository
public interface PhotosRepository extends JpaRepository<Photo, Long> {
}
