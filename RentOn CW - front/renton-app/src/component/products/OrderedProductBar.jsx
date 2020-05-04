import React, {Component} from 'react'

class ProductBar extends Component {

    constructor(props) {
        super(props)

        this.openProduct = this.openProduct.bind(this)

        this.state = {
            id: 2,
            title: 'Велосипед',
            imgLink: './img/product.jpg',
            category: 'Поход',
            price: '$988.56'
        }
    }

    openProduct(id) {
        window.location.assign("/product")
    }

    render() {
        return (
            <div>
                <div className="col-md-4 col-xs-6">
                    <div class="product">
                        <div class="product-img">
                            <img src={this.state.imgLink} alt=""/>
                            <div class="product-label">
                                <span class="sale">-30%</span>
                                <span class="new">NEW</span>
                            </div>
                        </div>
                        <div class="product-body">
                            <p class="product-category">{this.state.category}</p>
                            <h3 class="product-name"><a href="/product">{this.state.title}</a></h3>
                            <h4 class="product-price">{this.state.price}
                                <del
                                    class="product-old-price">$990.00
                                </del>
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
                                    class="tooltipp">сравнить</span></button>
                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                    class="tooltipp">посмотреть</span></button>
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