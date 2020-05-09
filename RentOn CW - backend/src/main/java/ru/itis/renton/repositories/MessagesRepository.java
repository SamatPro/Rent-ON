package ru.itis.renton.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.itis.renton.models.Message;

import java.util.List;

public interface MessagesRepository extends JpaRepository<Message, Long> {
    @Query("select m from Message m join Rent r on m.rent=r where r.id=:rentId order by m.createdAt asc ")
    List<Message> findAllByRentOrderByCreatedAtAsc(Long rentId);

}
