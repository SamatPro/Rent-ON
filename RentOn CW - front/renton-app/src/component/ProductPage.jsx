import React, {Component} from 'react'
import Navbar from "./Navbar";

class ProductPage extends Component {

    render() {
        return (
            <div>
                <Navbar/>


                {/*<div class="single-product-area section-padding-100 clearfix">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-12 col-lg-7">
                                <div class="single_product_thumb">
                                    <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li class="active" data-target="#product_details_slider" data-slide-to="0" style={{background_image : url(img/product.jpg)}}>
                                            </li>
                                            <li data-target="#product_details_slider" data-slide-to="1" style="background-image: url(img/product-img/pro-big-2.jpg);">
                                            </li>
                                            <li data-target="#product_details_slider" data-slide-to="2" style="background-image: url(img/product-img/pro-big-3.jpg);">
                                            </li>
                                            <li data-target="#product_details_slider" data-slide-to="3" style="background-image: url(img/product-img/pro-big-4.jpg);">
                                            </li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <a class="gallery_img" href="./img/product.jpg">
                                                    <img class="d-block w-100" src="./img/product.jpg" alt="First slide"/>
                                                </a>
                                            </div>
                                            <div class="carousel-item">
                                                <a class="gallery_img" href="./img/baba-yaga.jpg">
                                                    <img class="d-block w-100" src="img/product-img/pro-big-2.jpg" alt="Second slide"/>
                                                </a>
                                            </div>
                                            <div class="carousel-item">
                                                <a class="gallery_img" href="./img/product.jpg">
                                                    <img class="d-block w-100" src="img/product-img/pro-big-3.jpg" alt="Third slide"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-5">
                                <div class="single_product_desc">

                                    <div class="product-meta-data">
                                        <div class="line"></div>
                                        <p class="product-price">$180</p>
                                        <a href="product-details.html">
                                            <h6>White Modern Chair</h6>
                                        </a>

                                        <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                            <div class="ratings">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                            </div>

                                        </div>

                                        <p class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
                                    </div>

                                    <div class="short_overview my-5">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
                                    </div>


                                    <form class="cart clearfix" method="post">
                                        <button type="submit" name="addtocart" value="5" class="btn amado-btn">Арендовать</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
*/}



                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-md-push-2">
                                <div id="product-main-img">

                                    <div className="product-preview">
                                        <img src="./img/baba-yaga.jpg" alt=""/>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-2  col-md-pull-5">
                                <div id="product-imgs">
                                    <div className="product-preview">
                                        <img src="./img/product.jpg" alt=""/>
                                    </div>

                                    <div className="product-preview">
                                        <img src="./img/baba-yaga.jpg" alt=""/>
                                    </div>

                                    <div className="product-preview">
                                        <img src="./img/product.jpg" alt=""/>
                                    </div>

                                    <div className="product-preview">
                                        <img src="./img/baba-yaga.jpg" alt=""/>
                                    </div>

                                    <div className="product-preview">
                                        <img src="./img/baba-yaga.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="product-details">
                                    <h2 className="product-name">Баба яга</h2>
                                    <div>
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <a className="review-link" href={"#"}>10 Review(s) | Add your review</a>
                                    </div>
                                    <div>
                                        <h3 className="product-price">$980.00 <del className="product-old-price">$990.00</del>
                                        </h3>
                                        <span className="product-available">In Stock</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.</p>

                                    <ul className="product-btns">
                                        <li><a href={"#"}><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                                        <li><a href={"#"}><i className="fa fa-exchange"></i> add to compare</a></li>
                                    </ul>
                                    <ul className="product-links">
                                        <li>Category:</li>
                                        <li><a>Headphones</a></li>
                                        <li><a>Accessories</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div id="product-tab">
                                    <ul className="tab-nav">
                                        <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                                        <li><a data-toggle="tab" href="#tab2">Details</a></li>
                                        <li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="tab1" className="tab-pane fade in active">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                        sunt in culpa qui officia deserunt mollit anim id est
                                                        laborum.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab2" className="tab-pane fade in">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                        sunt in culpa qui officia deserunt mollit anim id est
                                                        laborum.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab3" className="tab-pane fade in">
                                            <div className="row">

                                                <div className="col-md-3">
                                                    <div id="rating">
                                                        <div className="rating-avg">
                                                            <span>4.5</span>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                        </div>
                                                        <ul className="rating">
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div style={{width: 80 + '%'}}></div>
                                                                </div>
                                                                <span className="sum">3</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div style={{width: 60 + '%'}}></div>
                                                                </div>
                                                                <span className="sum">2</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div></div>
                                                                </div>
                                                                <span className="sum">0</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div></div>
                                                                </div>
                                                                <span className="sum">0</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div></div>
                                                                </div>
                                                                <span className="sum">0</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div id="reviews">
                                                        <ul className="reviews">
                                                            <li>
                                                                <div className="review-heading">
                                                                    <h5 className="name">John</h5>
                                                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                    <div className="review-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-o empty"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-body">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna aliqua</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-heading">
                                                                    <h5 className="name">John</h5>
                                                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                    <div className="review-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-o empty"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-body">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna aliqua</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-heading">
                                                                    <h5 className="name">John</h5>
                                                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                    <div className="review-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-o empty"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-body">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna aliqua</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="reviews-pagination">
                                                            <li className="active">1</li>
                                                            <li><a>2</a></li>
                                                            <li><a>3</a></li>
                                                            <li><a>4</a></li>
                                                            <li><a><i className="fa fa-angle-right"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div id="review-form">
                                                        <form className="review-form">
                                                            <input className="input" type="text" placeholder="Your Name"/>
                                                            <input className="input" type="email" placeholder="Your Email"/>
                                                            <textarea className="input"
                                                                      placeholder="Your Review"></textarea>
                                                            <div className="input-rating">
                                                                <span>Your Rating: </span>
                                                                <div className="stars">
                                                                    <input id="star5" name="rating" value="5"
                                                                           type="radio"/><label htmlFor="star5"></label>
                                                                    <input id="star4" name="rating" value="4"
                                                                           type="radio"/><label htmlFor="star4"></label>
                                                                    <input id="star3" name="rating" value="3"
                                                                           type="radio"/><label htmlFor="star3"></label>
                                                                    <input id="star2" name="rating" value="2"
                                                                           type="radio"/><label htmlFor="star2"></label>
                                                                    <input id="star1" name="rating" value="1"
                                                                           type="radio"/><label htmlFor="star1"></label>
                                                                </div>
                                                            </div>
                                                            <button className="primary-btn">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h3 className="title">Related Products</h3>
                                </div>
                            </div>


                            <div className="col-md-3 col-xs-6">
                                <div className="product">
                                    <div className="product-img">
                                        <img src="./img/product01.png" alt=""/>
                                        <div className="product-label">
                                            <span className="sale">-30%</span>
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a>product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del>
                                        </h4>
                                        <div className="product-rating">
                                        </div>
                                        <div className="product-btns">
                                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span
                                                className="tooltipp">add to wishlist</span></button>
                                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span
                                                className="tooltipp">add to compare</span></button>
                                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-6">
                                <div className="product">
                                    <div className="product-img">
                                        <img src="./img/product02.png" alt=""/>
                                        <div className="product-label">
                                            <span className="new">NEW</span>
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a>product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del>
                                        </h4>
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product-btns">
                                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span
                                                className="tooltipp">add to wishlist</span></button>
                                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span
                                                className="tooltipp">add to compare</span></button>
                                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="clearfix visible-sm visible-xs"></div>


                            <div className="col-md-3 col-xs-6">
                                <div className="product">
                                    <div className="product-img">
                                        <img src="./img/product03.png" alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a>product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del>
                                        </h4>
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-btns">
                                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span
                                                className="tooltipp">add to wishlist</span></button>
                                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span
                                                className="tooltipp">add to compare</span></button>
                                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-6">
                                <div className="product">
                                    <div className="product-img">
                                        <img src="./img/product04.png" alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a>product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del>
                                        </h4>
                                        <div className="product-rating">
                                        </div>
                                        <div className="product-btns">
                                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span
                                                className="tooltipp">add to wishlist</span></button>
                                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span
                                                className="tooltipp">add to compare</span></button>
                                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductPage