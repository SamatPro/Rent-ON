package ru.itis.renton.clients;

import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import io.r2dbc.spi.Connection;
import io.r2dbc.spi.ConnectionFactories;
import io.r2dbc.spi.ConnectionFactory;
import io.r2dbc.spi.ConnectionFactoryOptions;
import org.springframework.data.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import ru.itis.renton.entries.ProductDbRecord;
import ru.itis.renton.entries.UserDbRecord;

import static io.r2dbc.spi.ConnectionFactoryOptions.*;

@Component
public class ApiDataDbClientImpl implements ApiDataClient {

    private ConnectionFactory connectionFactory;

    public ApiDataDbClientImpl() {
        ConnectionFactoryOptions options = builder()
                .option(DRIVER, "postgresql")
                .option(PORT, 5433)
                .option(HOST, "localhost")
                .option(USER, "postgres")
                .option(PASSWORD, "postgres")
                .option(DATABASE, "postgres")
                .build();
        this.connectionFactory = ConnectionFactories.get(options);
    }

    @Override
    public Flux<ProductDbRecord> getProducts() {
        DatabaseClient client = DatabaseClient.create(connectionFactory);
        return client.execute("select * from \"products\"").as(ProductDbRecord.class).fetch().all()
                .map(row -> ProductDbRecord.builder()
                        .id(row.getId())
                        .title(row.getTitle())
                        .price(row.getPrice())
                        .category(row.getCategory())
                        .description(row.getDescription())
                        .build()
                );
    }

    @Override
    public Flux<UserDbRecord> getUsers() {
        DatabaseClient client = DatabaseClient.create(connectionFactory);

        return client.execute("select * from \"users\"").as(UserDbRecord.class).fetch().all()
                .map(row -> UserDbRecord.builder()
                        .id(row.getId())
                        .firstName(row.getFirstName())
                        .lastName(row.getLastName())
                        .login(row.getLogin())
                        .role(row.getRole())
                        .build()
                );
    }
}
