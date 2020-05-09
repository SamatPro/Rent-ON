package ru.itis.renton.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.itis.renton.dto.ProductDto;
import ru.itis.renton.models.Product;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.PhotosRepository;
import ru.itis.renton.repositories.ProductsRepository;
import ru.itis.renton.repositories.UsersRepository;
import ru.itis.renton.security.providers.JwtTokenProvider;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private PhotosRepository photosRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PersistenceContext
    private EntityManager em; // чтобы удалить связь многие-ко-многим

    @Override
    public Long add(ProductDto productDto, Authentication authentication) {
        User user = (User) authentication.getPrincipal();

        Product product = Product.builder()
                .title(productDto.getTitle())
                .description(productDto.getDescription())
                .price(productDto.getPrice())
                .owner(user)
                .build();

        return productsRepository.save(product).getId();
    }

    @Override
    public Product get(Long id) {
        return productsRepository.findById(id).get();
    }

    @Override
    @Transactional
    public List<ProductDto> getRecommendations(Authentication authentication) {
        if (authentication == null){
            return productsRepository.findAll().stream()
                    .map(product -> ProductDto.from(product, null)
//                            ProductDto.builder()
//                                    .id(product.getId())
//                                    .title(product.getTitle())
//                                    .description(product.getDescription())
//                                    .price(product.getPrice())
//                                    .image(
//                                            product.getPhotos().isEmpty()
//                                                    ? ""
//                                                    : product.getPhotos().get(product.getPhotos().size()-1).getTitle()
//                                    )
//                                    .isFavourite(false)
//                                    .build()
                    )
                    .collect(Collectors.toList());
        }else {
            User user = (User) authentication.getPrincipal();
            return productsRepository.findAll().stream()
                    .filter(product ->
                            !product.getOwner().getId().equals(user.getId())
                    )
                    .map(product -> ProductDto.from(product, authentication)
//                            ProductDto.builder()
//                                    .id(product.getId())
//                                    .title(product.getTitle())
//                                    .description(product.getDescription())
//                                    .price(product.getPrice())
//                                    .image(
//                                            product.getPhotos().isEmpty()
//                                                    ? ""
//                                                    : product.getPhotos().get(product.getPhotos().size() - 1).getTitle()
//                                    )
//                                    .isFavourite(product.getCandidates().contains(user))
//                                    .build()
                    )
                    .collect(Collectors.toList());
        }
    }

    @Override
    @Transactional
    public Boolean addToFavourite(Long productId, Authentication authentication) {
        User user = (User) authentication.getPrincipal();

        Product product = productsRepository.getProductById(productId);
        if (product.getCandidates().stream().noneMatch(p -> (p.getId().equals(user.getId())))){
//            product.getCandidates().add(user);
            user.getFavourites().add(product);
//            productsRepository.saveAndFlush(product);
            usersRepository.save(user);
            System.out.println("saved");
            return true;
        }else {
            Query query =
                    em.createNativeQuery("DELETE FROM users_favourites uf " +
                            "WHERE uf.user_id=:userId " +
                            "AND uf.product_id=:productId");

            query.setParameter("userId",user.getId());
            query.setParameter("productId",productId);
            query.executeUpdate();
//            user.getFavourites().remove(product);
//            product.getCandidates().remove(user);
//            productsRepository.save(product);
//            usersRepository.save(user);

            System.out.println("deleted");
            return false;
        }
    }

    @Override
    public List<ProductDto> getFavourites(Authentication authentication) {
        User candidate = (User) authentication.getPrincipal();
        List<ProductDto> favourites = candidate.getFavourites().stream().map(product -> ProductDto.from(product, authentication)).collect(Collectors.toList());
        return favourites;
    }
}
