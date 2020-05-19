package ru.itis.renton.clients;

import reactor.core.publisher.Flux;
import ru.itis.renton.entries.ProductDbRecord;
import ru.itis.renton.entries.UserDbRecord;

public interface ApiDataClient {
    Flux<ProductDbRecord> getProducts();
    Flux<UserDbRecord> getUsers();
}
