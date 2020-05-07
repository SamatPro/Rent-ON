import React, {Component} from 'react'

const API_IMG_URL = 'http://localhost:8080/image/'


class ProductBar extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.state)

        this.state = {
            id: props.state.id,
            title: props.state.title,
            description: props.state.description,
            imgLink: API_IMG_URL + props.state.image,
            category: 'Поход',
            price: props.state.price
        }
        this.openProduct = this.openProduct.bind(this)
    }

    openProduct(id) {
        this.props.history.push(`/product/${id}`)
    }

    render() {
        return (
            <div>
                <div className="col-md-4 col-xs-6">
                    <div class="product">
                        <label htmlFor={"link" + this.state.id}>
                            <div class="product-img">
                                <img src={this.state.imgLink} alt=""/>
                            </div>
                        </label>
                        <div class="product-body">
                            <p class="product-category">{this.state.category}</p>
                            <h3 class="product-name"><a href="/product">{this.state.title}</a></h3>
                            <h4 class="product-price">{this.state.price}
                            </h4>
                            <div class="product-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product-btns">
                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                    class="tooltipp">сохранить</span></button>
                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                    class="tooltipp">срjhjdjhdd</span></button>
                                <button id={"link" + this.state.id} class="quick-view" onClick={this.openProduct(this.state.id)}>
                                    <i class="fa fa-eye"></i><span class="tooltipp">посмотреть</span></button>
                            </div>
                        </div>
                        <div class="add-to-cart">
                            <button class="add-to-cart-btn" onClick={() =>this.openProduct(this.state.id)}><i class="fa fa-shopping-cart"></i>
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