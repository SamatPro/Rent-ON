import React, {Component} from 'react'
import Navbar from "../Navbar";
import Header from "../Header";
import AuthenticationService from "../../service/AuthenticationService";
import Dialog from "../Dialog";

const API_IMG_URL = 'http://localhost:8080/image/'

class RentPage extends Component {

    constructor(props) {
        super(props)

        const id = this.props.match.params.id

        this.state = {
            id: this.props.match.params.id,
            product:{
                id:'',
                title: '',
                description: '',
                image: '',
                category: 'Поход',
                price: '',
                isFavourite: '',
                favouriteText: '',
            },
            owner:{
                id:'',
                firstName:'',
                lastName: '',
                phone: ''
            },
            dateOfDeal: '',
            endOfDeal: ''

        }
        this.getRent = this.getRent.bind(this)
        this.getRent(this.state.id)
    }

    getRent(id){
        AuthenticationService.getRent(id)
            .then(res=>{
                const product = res.data.productDto
                const owner = res.data.ownerDto

                this.setState({
                    product:{
                        id:res.data.productDto.id,
                        title: product.title,
                        description: product.description,
                        image: API_IMG_URL + product.image,
                        category: 'Поход',
                        price: product.price,
                        isFavourite: product.isFavourite ? 'fa fa-heart' : 'fa fa-heart-o',
                        favouriteText: product.isFavourite ? 'УБРАТЬ' : 'В ИЗБРАННОЕ',
                    },
                    owner:{
                        id:owner.id,
                        firstName:owner.firstName,
                        lastName: owner.lastName,
                        phone: owner.phone
                    },
                    dateOfDeal: res.data.dateOfDeal,
                    endOfDeal: res.data.endOfDeal
                })
            })
    }


    render() {
        return (
            <div>
                <Header/>
                <Navbar/>
                <div className={'container'}>

                <div className="section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-5">
                                <div id="product-main-img">

                                    <div className="product-preview">
                                        <img src={this.state.product.image} alt=""/>
                                    </div>

                                </div>
                            </div>

                            {/*<div className="col-md-2  col-md-pull-5">*/}
                            {/*    <div id="product-imgs">*/}
                            {/*        <div className="product-preview">*/}
                            {/*            <img src={this.state.product.image} alt=""/>*/}
                            {/*        </div>*/}

                            {/*        <div className="product-preview">*/}
                            {/*            <img src={this.state.product.image} alt=""/>*/}
                            {/*        </div>*/}

                            {/*        <div className="product-preview">*/}
                            {/*            <img src={this.state.product.image} alt=""/>*/}
                            {/*        </div>*/}

                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="col-md-4">
                                <div className="product-details">
                                    <h2 className="product-name">{this.state.product.title}</h2>

                                    <div>
                                        <h3 className="product-price">Цена: {this.state.product.price}
                                        </h3>
                                        <span className="product-available"></span>
                                    </div>
                                    <p>{this.state.description}</p>

                                    <ul className="product-btns">
                                        <li><a href={"/dialog?"}><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                                        <li><a href={"/user/" + this.state.owner.id}><i className="fa fa-user-circle"></i>{this.state.owner.firstName} {this.state.owner.lastName}</a></li>
                                    </ul>
                                    <ul className="product-links">
                                        <li>Category:</li>
                                        <li><a>Headphones</a></li>
                                        <li><a>Accessories</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-1 col-md-pull-1">
                                <Dialog state={this.state.id}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default RentPage