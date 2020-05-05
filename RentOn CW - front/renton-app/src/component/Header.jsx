import React, {Component} from 'react'
import ProfileLogo from "./ProfileLogo";
import HeaderButtons from "./HeaderButtons";

class Header extends Component {

    render() {
        return (
            <div>
                <header>
                    <div id="top-header">
                        <div className="container">
                            <ul className="header-links pull-left">
                                <li><a><i className="fa fa-phone"></i> +021-95-51-84</a></li>
                                <li><a><i className="fa fa-envelope-o"></i> renton.kzn@gmail.com</a></li>
                                <li><a><i className="fa fa-map-marker"></i> Казань, Кремлевская, 35 </a></li>
                            </ul>

                            <div id="auth"></div>
                            {/*<ul className="header-links pull-right">*/}
                            {/*    <li><a href="/register"><i className="fa fa-user-circle"></i> Регистрация</a></li>*/}
                            {/*    <li><a href="/login"><i className="fa fa-user-o"></i> Вход</a></li>*/}
                            {/*</ul>*/}
                            <ProfileLogo/>
                        </div>
                    </div>
                    

                    
                    <div id="header">
                        
                        <div className="container">
                            
                            <div className="row">
                                
                                <div className="col-md-3">
                                    <div className="header-logo">
                                        <a href="/" className="logo">
                                            <img src="/logo.png" alt="" width="200px"/>
                                        </a>
                                    </div>
                                </div>

                                <HeaderButtons/>
                                

                                
                                {/*<div className="col-md-5">*/}
                                {/*    <div className="header-search">*/}
                                {/*        <form>*/}
                                {/*            <input className="input input-select" placeholder="Я ищу..."/>*/}
                                {/*                <button className="search-btn">Поиск</button>*/}
                                {/*        </form>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                

                                
                                {/*<div className="col-md-4 clearfix">*/}
                                {/*    <div className="header-ctn">*/}

                                {/*        <div>*/}
                                {/*            <a >*/}
                                {/*                <i className="fa fa-plus-square"></i>*/}
                                {/*                <span>Добавить</span>*/}
                                {/*            </a>*/}
                                {/*        </div>*/}

                                {/*        */}
                                {/*        <div>*/}
                                {/*            <a >*/}
                                {/*                <i className="fa fa-heart-o"></i>*/}
                                {/*                <span>Мои пожелания</span>*/}
                                {/*                <div className="qty">2</div>*/}
                                {/*            </a>*/}
                                {/*        </div>*/}
                                {/*        */}

                                {/*        */}
                                {/*        <div className="dropdown">*/}
                                {/*            <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">*/}
                                {/*                <i className="fa fa-shopping-cart"></i>*/}
                                {/*                <span>Мои заказы</span>*/}
                                {/*                <div className="qty">3</div>*/}
                                {/*            </a>*/}
                                {/*            <div className="cart-dropdown">*/}
                                {/*                <div className="cart-list">*/}
                                {/*                    <div className="product-widget">*/}
                                {/*                        <div className="product-img">*/}
                                {/*                            <img src="./img/product.jpg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="product-body">*/}
                                {/*                            <h3 className="product-name"><a >product name goes here</a></h3>*/}
                                {/*                            <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>*/}
                                {/*                        </div>*/}
                                {/*                        <button className="delete"><i className="fa fa-close"></i></button>*/}
                                {/*                    </div>*/}

                                {/*                    <div className="product-widget">*/}
                                {/*                        <div className="product-img">*/}
                                {/*                            <img src="./img/product.jpg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="product-body">*/}
                                {/*                            <h3 className="product-name"><a >product name goes here</a></h3>*/}
                                {/*                            <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>*/}
                                {/*                        </div>*/}
                                {/*                        <button className="delete"><i className="fa fa-close"></i></button>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="cart-summary">*/}
                                {/*                    <small>3 Item(s) selected</small>*/}
                                {/*                    <h5>SUBTOTAL: $2940.00</h5>*/}
                                {/*                </div>*/}
                                {/*                <div className="cart-btns">*/}
                                {/*                    <a >View Cart</a>*/}
                                {/*                    <a >Checkout  <i className="fa fa-arrow-circle-right"></i></a>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        */}
                                {/*    </div>*/}
                                {/*</div>*/}
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </header>
                
            </div>
        )
    }
}

export default Header