import React, {Component} from 'react'
import AuthenticationService from "../../service/AuthenticationService";

const API_IMG_URL = 'http://localhost:8080/image/'


class FeedbackBar extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)

        this.state = {
            id: this.props.state.id,
            product:{
                id:this.props.state.productDto.id,
                title: this.props.state.productDto.title,
                description: props.state.productDto.description,
                imgLink: API_IMG_URL + props.state.productDto.image,
                category: this.props.state.productDto.category,
                price: props.state.productDto.price,
            },
            favouriteState:{
                isFavourite: props.state.productDto.isFavourite ? 'fa fa-heart' : 'fa fa-heart-o',
                favouriteText: props.state.productDto.isFavourite ? 'УБРАТЬ' : 'В ИЗБРАННОЕ',
            },
            owner:{
                id:props.state.productDto.user.id,
                firstName:props.state.productDto.user.firstName,
                lastName: props.state.productDto.user.lastName,
                phone: props.state.productDto.user.phone
            },
            tenant:{
                id:props.state.tenant.id,
                firstName:props.state.tenant.firstName,
                lastName: props.state.tenant.lastName,
                phone: props.state.tenant.phone
            },
            status:props.state.isAccepted==null ? "Не отвечено" : props.state.isAccepted ? "Принят" : "Отклонен",
            statusStyle: props.state.isAccepted==null ? "blue" : props.state.isAccepted ? "green" : "red",
            dateOfDeal: props.state.dateOfDeal,
            endOfDeal: props.state.endOfDeal


        }
        this.addToFavourites = this.addToFavourites.bind(this)
    }

    addToFavourites(id){
        AuthenticationService.addToFavourites(id)
            .then(r => {
                console.log("success")
                console.log(r.data)
                this.setState({
                    favouriteState:{
                        isFavourite: r.data ? 'fa fa-heart' : 'fa fa-heart-o',
                        favouriteText: r.data ? 'УБРАТЬ' : 'В ИЗБРАННОЕ',
                    }
                })
            })
            .catch(console.log("error"));
    }

    render() {
        return (
            <div>
                <div className="col-md-4 col-xs-6">
                    <div class="product">
                        <a href={"/feedback/" + this.state.id}>
                            <div class="product-img">
                                <img src={this.state.product.imgLink} alt=""/>
                            </div>
                        </a>
                        <div class="product-body">
                            <p class="product-category">{this.state.product.category}</p>
                            <h3 class="product-name">
                                <a href={"/feedback/" + this.state.id}>{this.state.product.title}</a>
                            </h3>
                            <h4 class="product-price">
                                {this.state.product.price}
                            </h4>
                            <h5 class="product-price" style={{color: this.state.statusStyle}}>
                                {this.state.status}
                            </h5>
                            <div class="product-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product-btns">
                                <a href={"/user/" + this.state.tenant.id} class="add-to-compare"><i class="fa fa-user-o"></i><span
                                    class="tooltipp"> {this.state.tenant.firstName} {this.state.tenant.lastName}</span></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedbackBar