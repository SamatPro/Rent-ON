package ru.itis.renton.models;

import java.util.List;
import java.util.Set;

public class Product {
    private Long id;
    private String title;
    private Double price;
    private String description;
    private List<Photo> photos;
    private User owner;
    private List<Comment> comments;
    private Set<Category> categories;

    private State state;
}
