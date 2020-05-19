package ru.itis.renton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import ru.itis.renton.clients.ApiDataClient;
import ru.itis.renton.entries.ProductDbRecord;
import ru.itis.renton.entries.UserDbRecord;

@RestController
public class AdminsController {

    @Autowired
    private ApiDataClient apiDataClient;

    @RequestMapping(value = "/list_of_users",
            produces = MediaType.TEXT_EVENT_STREAM_VALUE,
            method = RequestMethod.GET)
    public Flux<UserDbRecord> getUsers(){
        return apiDataClient.getUsers();
    }

    @RequestMapping(value = "/list_of_products",
            produces = MediaType.TEXT_EVENT_STREAM_VALUE,
            method = RequestMethod.GET)
    public Flux<ProductDbRecord> getProducts(){
        return apiDataClient.getProducts();
    }
}
