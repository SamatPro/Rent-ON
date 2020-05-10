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
                                <input className="input input-select" placeholder="Я ищу..." value=""/>
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
                                <a href="/favourites">
                                    <i className="fa fa-heart"></i>
                                    <span>Избранные</span>
                                    {/*<div className="qty">2</div>*/}
                                </a>
                            </div>

                            <div className="dropdown">
                                <a href="/rents">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>Мои заказы</span>
                                    {/*<div className="qty">3</div>*/}
                                </a>
                            </div>

                            <div>
                                <a href="/feedbacks">
                                    <i className="fa fa-comments"></i>
                                    <span>Отклики</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default HeaderButtons