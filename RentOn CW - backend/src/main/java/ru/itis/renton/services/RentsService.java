package ru.itis.renton.services;

import org.springframework.security.core.Authentication;
import ru.itis.renton.dto.RentDto;
import ru.itis.renton.models.Rent;

import java.util.List;

public interface RentsService {
    Long rent(Long productId, Authentication authentication);
    List<RentDto> getRents(Authentication authentication);
    RentDto getRent(Long id, Authentication authentication);
    List<RentDto> getFeedbacks(Authentication authentication);
    RentDto getFeedback(Long id, Authentication authentication);
}
