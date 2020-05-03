package ru.itis.renton.models;

import java.sql.Timestamp;

public class Comment {
    private Long id;
    private String text;
    private Integer rating;
    private Timestamp datetime;

    private User author;
    private Product product;
}
