import React, {Component} from 'react'
import Navbar from "../Navbar";
import Header from "../Header";
import AuthenticationService from "../../service/AuthenticationService";
import Dialog from "./Dialog";

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
                category: '',
                price: '',
                isFavourite: '',
                favouriteText: '',
            },
            tenant:{
                id:'',
                firstName:'',
                lastName: '',
                phone: ''
            },
            owner:{
                id:'',
                firstName:'',
                lastName: '',
                phone: ''
            },
            isAccepted:'',
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
                const tenant = res.data.tenant

                this.setState({
                    product:{
                        id:res.data.productDto.id,
                        title: product.title,
                        description: product.description,
                        image: API_IMG_URL + product.image,
                        category: product.category,
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
                    tenant:{
                        id: tenant.id,
                        firstName:tenant.firstName,
                        lastName: tenant.lastName,
                        phone: tenant.phone
                    },
                    isAccepted:res.data.isAccepted,
                    dateOfDeal: res.data.dateOfDeal,
                    endOfDeal: res.data.endOfDeal
                })
            }).catch(()=>{
                this.props.history.push(`/rents`)
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
                                        <li>Арендодатель: <a href={"/user/" + this.state.owner.id}><i className="fa fa-user-circle"></i>{this.state.owner.firstName} {this.state.owner.lastName}</a></li>
                                    </ul>
                                    <ul className="product-links">
                                        <li>Категория:</li>
                                        <li><a>{this.state.product.category}</a></li>
                                    </ul>
                                    {this.state.isAccepted ?
                                        <div className="add-to-cart">
                                            <button className="accept">
                                                <i className="fa fa-credit-card"></i>
                                                Оплатить
                                            </button>
                                        </div>
                                        :
                                    this.state.isAccepted!=null
                                        ?
                                        <h5 className="product-price" style={{color: "red"}}>
                                            Отклонен
                                        </h5>
                                        :
                                        <h5 className="product-price" style={{color: "blue"}}>

                                        </h5>
                                    }
                                </div>
                            </div>

                            <div className="col-md-1 col-md-pull-1">
                                <Dialog state={this.state.id} username={this.state.tenant.firstName+" "+this.state.tenant.lastName}/>
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