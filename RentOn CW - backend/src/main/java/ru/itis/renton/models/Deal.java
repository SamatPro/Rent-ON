package ru.itis.renton.models;

import java.util.Date;

public class Deal {
    private Long id;
    private Product product;
    private User landlord;
    private User tenant;
    private Date dateOfDeal;
    private Date endOfDeal;
}
