package ru.itis.renton.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itis.renton.models.Photo;

public interface PhotosRepository extends JpaRepository<Photo, Long> {
}
