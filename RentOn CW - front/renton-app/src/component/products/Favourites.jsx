import React, {Component} from 'react'
import Navbar from "../Navbar";
import ProductBar from "./ProductBar";
import AuthenticationService from "../../service/AuthenticationService";
import Header from "../Header";

class Favourites extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: []

        }
        this.getProducts = this.getProducts.bind(this)
        this.getProducts();
    }

    getProducts(){
        AuthenticationService.setupAxiosInterceptors();
        AuthenticationService.getFavourites()
            .then(res=>{
                console.log(res.data)
                this.setState({
                    products:res.data
                })
            })
            .catch(console.log("error"))
    }

    render() {
        return (
            <div>
                <Header/>
                <Navbar/>
                <div className={'container'}>

                <div class="section">
                    <div class="container">
                        <div id="store" class="col-md-12">
                            <div class="row">
                                {this.state.products.map((product)=> <ProductBar state={product}/>)}

                                <div className="clearfix visible-sm visible-xs"></div>

                            </div>
                            <div class="store-filter clearfix">
                                <span class="store-qty">Показано 1-20 товары</span>
                                <ul class="store-pagination">
                                    <li class="active">1</li>
                                    <li><a>2</a></li>
                                    <li><a>3</a></li>
                                    <li><a>4</a></li>
                                    <li><a><i class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Favourites