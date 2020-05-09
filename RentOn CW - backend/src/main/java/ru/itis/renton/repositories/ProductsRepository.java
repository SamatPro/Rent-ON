package ru.itis.renton.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.itis.renton.models.Product;

import java.util.List;

@Repository
public interface ProductsRepository extends JpaRepository<Product, Long> {
    Product getProductById(Long id);
    List<Product> findDistinctByTitleIsLikeOrDescriptionIsLike(String title, String description);
}
