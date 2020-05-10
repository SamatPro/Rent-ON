import React, {Component} from 'react'
import Navbar from "../Navbar";
import ProductBar from "../products/ProductBar";
import AuthenticationService from "../../service/AuthenticationService";
import axios from "axios";
import Header from "../Header";
import RentBar from "./RentBar";

class Rents extends Component {

    constructor(props) {
        super(props)

        this.state = {
            rents: []

        }
        this.getRents = this.getRents.bind(this)
        this.getRents();
    }

    getRents(){
        AuthenticationService.setupAxiosInterceptors();
        AuthenticationService.getRents()
            .then(res=>{
                this.setState({
                    rents: res.data
                })
            })
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
                                {this.state.rents.map((rent)=> <RentBar state={rent}/>)}

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

export default Rents