package ru.itis.renton.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.support.RepositoryEntityLinks;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;
import ru.itis.renton.controllers.ProductsController;
import ru.itis.renton.models.Product;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class ProductsRepresentationProcessor implements RepresentationModelProcessor<EntityModel<Product>> {

    @Autowired
    private RepositoryEntityLinks links;

    @Override
    public EntityModel<Product> process(EntityModel<Product> model) {
        Product product = model.getContent();
//        if (product != null && product.getState().equals("DRAFT")) {
//            model.add(linkTo(methodOn(ProductsController.class).add(product.getId())).withRel("publish"));
//        }

        if (product != null && product.getState().equals("PUBLISHED")) {
            model.add(links.linkToItemResource(Product.class, product.getId()).withRel("HIDDEN"));
        }
        return model;
    }
}
