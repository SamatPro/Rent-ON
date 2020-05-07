import React, {Component} from 'react'
import Navbar from "../Navbar";
import Service from "../../service/Service";
import Header from "../Header";

const API_IMG_URL = 'http://localhost:8080/image/'

class ProductPage extends Component {

    constructor(props) {
        super(props)

        const id = this.props.match.params.id

        this.state = {
            id:this.props.match.params.id,
            title: '',
            price: '',
            description:'',
            state:'',
            image: '',
            owner: ''

        }
        this.getProduct = this.getProduct.bind(this)
        this.getProduct(this.state.id)
    }

    getProduct(id){
        // const header = new Header();
        // header.append("AUTH", localStorage.getItem("AUTH"))
        Service.getProduct(id)
            .then((res)=>{
                this.setState({
                    title: res.data.title,
                    price: res.data.price,
                    description: res.data.description,
                    state: res.data.state,
                    owner: res.data.user
                })
                console.log(res.data)
                if (res.data.image!==null){
                    this.setState({
                        image: API_IMG_URL + res.data.image
                    })
                }else {
                    this.setState({
                        image: '/img/noProductImage.png'
                    })
                }
            }).catch()
    }


    render() {
        return (
            <div>
                <Navbar/>

                <div className="section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-5 col-md-push-2">
                                <div id="product-main-img">

                                    <div className="product-preview">
                                        <img src={this.state.image} alt=""/>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-2  col-md-pull-5">
                                <div id="product-imgs">
                                    <div className="product-preview">
                                        <img src={this.state.image} alt=""/>
                                    </div>

                                    <div className="product-preview">
                                        <img src={this.state.image} alt=""/>
                                    </div>

                                    <div className="product-preview">
                                        <img src={this.state.image} alt=""/>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="product-details">
                                    <h2 className="product-name">{this.state.title}</h2>
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
                                        <h3 className="product-price">Цена: {this.state.price}
                                        </h3>
                                        <span className="product-available">{this.state.state}</span>
                                    </div>
                                    <p>{this.state.description}</p>

                                    <ul className="product-btns">
                                        <li><a href={"#"}><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                                        <li><a href={"/user/" + this.state.owner.id}><i className="fa fa-user-circle"></i>{this.state.owner.firstName} {this.state.owner.lastName}</a></li>
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
                                        <li className="active"><a data-toggle="tab" href="#tab1">Описание</a></li>
                                        <li><a data-toggle="tab" href="#tab2">Детали</a></li>
                                        <li><a data-toggle="tab" href="#tab3">Комментарии</a></li>
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