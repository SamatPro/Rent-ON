import React, {Component} from 'react'
import AuthenticationService from "../service/AuthenticationService";
import axios from "axios";

const API_URL = 'http://localhost:8080'

class HeaderButtons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            href: "/user/" + localStorage.getItem("userId"),
            firstName: '',
            lastName: '',
        }
        this.getUserData(localStorage.getItem("userId"));
        this.logout = this.logout.bind(this)
    }

    logout(){
        AuthenticationService.logout()
    }

    getUserData(id){
        if (AuthenticationService.isUserLoggedIn()){
            AuthenticationService.setupAxiosInterceptors();
            axios.get(`${API_URL}/user/${id}`)
                .then(res=>{
                        const user = res.data
                        this.setState({
                            firstName: user.firstName,
                            lastName: user.lastName,
                        })
                    }
                )
        }
    }


    render() {
        if (!AuthenticationService.isUserLoggedIn()) {
            return (
                <div>

                    <div className="col-md-6">
                        <div className="header-search">
                            <form>
                                <input className="input input-select" placeholder="Я ищу..."/>
                                <button className="search-btn">Поиск</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-3 clearfix">
                        <div className="header-ctn">

                            <div>
                                <a >
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                    <span>Мы в Instagram</span>
                                </a>
                            </div>


                            <div>
                                <a >
                                    <i className="fa fa-vk" aria-hidden="true"></i>
                                    <span>Мы в VK</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else {
            return (

                <div>

                    <div className="col-md-5">
                        <div className="header-search">
                            <form>
                                <input className="input input-select" placeholder="Я ищу..."/>
                                <button className="search-btn">Поиск</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-4 clearfix">
                        <div className="header-ctn">

                            <div>
                                <a href="/product/add">
                                    <i className="fa fa-plus-square"></i>
                                    <span>Добавить</span>
                                </a>
                            </div>


                            <div>
                                <a >
                                    <i className="fa fa-heart-o"></i>
                                    <span>Мои пожелания</span>
                                    <div className="qty">2</div>
                                </a>
                            </div>



                            <div className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>Мои заказы</span>
                                    <div className="qty">3</div>
                                </a>
                                <div className="cart-dropdown">
                                    <div className="cart-list">
                                        <div className="product-widget">
                                            <div className="product-img">
                                                <img src="./img/product.jpg" alt=""/>
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-name"><a >product name goes here</a></h3>
                                                <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                                            </div>
                                            <button className="delete"><i className="fa fa-close"></i></button>
                                        </div>

                                        <div className="product-widget">
                                            <div className="product-img">
                                                <img src="./img/product.jpg" alt=""/>
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-name"><a >product name goes here</a></h3>
                                                <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                                            </div>
                                            <button className="delete"><i className="fa fa-close"></i></button>
                                        </div>
                                    </div>
                                    <div className="cart-summary">
                                        <small>3 Item(s) selected</small>
                                        <h5>SUBTOTAL: $2940.00</h5>
                                    </div>
                                    <div className="cart-btns">
                                        <a >View Cart</a>
                                        <a >Checkout  <i className="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default HeaderButtons