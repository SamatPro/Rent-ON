package ru.itis.renton.models;

import java.sql.Timestamp;
import java.util.List;

public class Deal {
    private Long id;
    private Order order;
    private List<Message> messages;
    private Timestamp dateOfDeal;
    private Timestamp endOfDeal;
}
