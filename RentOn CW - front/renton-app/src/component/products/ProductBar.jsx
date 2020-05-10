import React, {Component} from 'react'
import AuthenticationService from "../../service/AuthenticationService";

const API_IMG_URL = 'http://localhost:8080/image/'


class ProductBar extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)

        this.state = {
            id: props.state.id,
            title: props.state.title,
            description: props.state.description,
            imgLink: API_IMG_URL + props.state.image,
            category: props.state.category==null ? 'other' : props.state.category,
            price: props.state.price,
            isFavourite: props.state.isFavourite ? 'fa fa-heart' : 'fa fa-heart-o',
            favouriteText: props.state.isFavourite ? 'УБРАТЬ' : 'В ИЗБРАННОЕ',
            user:{
                id: props.state.user.id,
                firstName: props.state.user.firstName,
                lastName: props.state.user.lastName
            }

        }
        this.addToFavourites = this.addToFavourites.bind(this)
        this.rent = this.rent.bind(this)
    }

    addToFavourites(id){
        AuthenticationService.addToFavourites(id)
            .then(r => {
                console.log("success")
                console.log(r.data)
                this.setState({
                    isFavourite: r.data ? 'fa fa-heart' : 'fa fa-heart-o',
                    favouriteText: r.data ? 'УБРАТЬ' : 'В ИЗБРАННОЕ',

                })
            })
            .catch(console.log("error"));
    }

    rent(id) {
        AuthenticationService.rent(id)
    }

    render() {
        return (
            <div>
                <div className="col-md-4 col-xs-6">
                    <div class="product">
                        <a href={"/product/" + this.state.id}>
                            <div class="product-img">
                                <img src={this.state.imgLink} alt=""/>
                            </div>
                        </a>
                        <div class="product-body">
                            <p class="product-category">{this.state.category}</p>
                            <h3 class="product-name">
                                <a href={"/product/" + this.state.id}>{this.state.title}</a>
                            </h3>
                            <h4 class="product-price">
                                {this.state.price}
                            </h4>
                            <div class="product-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product-btns">
                                <button onClick={()=> this.addToFavourites(this.state.id)} class="add-to-wishlist">
                                    <i class={this.state.isFavourite}></i>
                                    <span class="tooltipp">{this.state.favouriteText}</span></button>
                                <button onClick={()=> window.location.href="/user/"+this.state.user.id } class="add-to-compare"><i class="fa fa-user-circle"></i><span
                                    class="tooltipp">{this.state.user.firstName} {this.state.user.lastName}</span></button>
                            </div>
                        </div>
                        <div class="add-to-cart">
                            <button class="add-to-cart-btn" onClick={() =>this.rent(this.state.id)}><i class="fa fa-shopping-cart"></i>
                                Взять на аренду
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductBar