import React, {Component} from 'react'
import ProductBar from "../products/ProductBar";
import FavProductBar from "../products/FavProductBar";
import AuthenticationService from "../../service/AuthenticationService";
import axios from "axios";
import Service from "../../service/Service";
import ProfileBtn from "./ProfileBtn";

const API_URL = 'http://localhost:8080'
const API_IMG_URL = 'http://localhost:8080/image/'

class Profile extends Component {

    constructor(props) {
        super(props)

        const id = this.props.match.params.id

        this.state = {
            id:this.props.match.params.id,
            login: '',
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
            image: ''
        }

        this.updateProfile = this.updateProfile.bind(this)
        this.getUserData(id);
    }

    getUserData(id){
        AuthenticationService.setupAxiosInterceptors();
        axios.get(`${API_URL}/user/${id}`)
            .then(res=>{
                    console.log(res)
                    const user = res.data
                    this.setState({
                        login: user.login,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        address: user.address,
                        phone: user.phone,
                    })
                if (user.image){
                    console.log(user.image)
                    this.setState({
                        image: API_IMG_URL + user.image
                    })
                }else {
                    this.setState({
                        image: API_IMG_URL+'default.png'
                    })
                }
                }
            )
    }

    updateProfile(){
        this.props.history.push(`/user/edit`)
    }

    render() {
        return (

            <div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div id="product-main-img">

                                    <div className="product-preview">
                                        <img src={this.state.image} alt="ава"/>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-offset-4">
                                <div className="product-details">
                                    <h2 className="profile-name">{this.state.firstName} {this.state.lastName}</h2>
                                    <h4 className="profile-name">{this.state.login}</h4>
                                    <h4 className="profile-name">{this.state.phone}</h4>
                                    <h4 className="profile-name">{this.state.address}</h4>

                                    {/*<ProfileBtn/>*/}
                                    {/*<ProfileBtn/>*/}
                                    <button className="primary-btn order-submit"
                                        onClick={this.updateProfile}>Изменить данные и пароль
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div id="product-tab">
                                    <ul className="tab-nav">
                                        <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                                        <li><a data-toggle="tab" href="#tab2">Избранные</a></li>
                                        <li><a data-toggle="tab" href="#tab3">Мои заказы</a></li>
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
                                                    <FavProductBar/>
                                                    <FavProductBar/>
                                                    <FavProductBar/>
                                                    <FavProductBar/>

                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab3" className="tab-pane fade in">
                                            <div className="row">
                                                <ProductBar/>
                                                <ProductBar/>
                                                <ProductBar/>
                                                <ProductBar/>
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
export default Profile