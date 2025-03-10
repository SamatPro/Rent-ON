import React, {Component} from 'react'
import Navbar from "../Navbar";
import axios from "axios";
import AuthenticationService from "../../service/AuthenticationService";
import Header from "../Header";

const API_URL = 'http://localhost:8080'
const API_IMG_URL = 'http://localhost:8080/image/'

class ProductAdd extends Component {

    constructor(props) {
        super(props)

        const id = this.props.match.params.id

        this.state = {
            id:this.props.match.params.id,
            title:'',
            price:'',
            description:'',
            owner: '',
            state: '',
            image:'/img/noProductImage.png',
            category:'',
            file: null

        }
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.addImage = this.addImage.bind(this);

    }

    addImage(productId){
        AuthenticationService.setupAxiosInterceptors();
        let data = new FormData();
        data.append('file', this.state.file);
        data.append('productId', productId);

        axios.post("http://localhost:8080/product-image-upload", data)
            .then(res => {
                this.props.history.push(`/product/${productId}`)
            }).catch((error) => {
                console.log("error")
        });
    }

    onChange(e) {
        this.setState({
            file:e.target.files[0],
        });
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    addProduct() {
        AuthenticationService.setupAxiosInterceptors()
        AuthenticationService.addProduct(this.state.title, this.state.price, this.state.description, this.state.category)
            .then((res)=>{
                const id = res.data;
                this.addImage(id);
            }
            )
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

                            <div className="col-md-3">
                                <div id="product-imgs">
                                    <div className="product-preview">
                                        <img src={this.state.image} alt=""/>
                                    </div>

                                    <div className="product-preview">
                                        <img src={this.state.image} alt=""/>
                                    </div>

                                    <div className="product-preview">
                                        <img src={this.state.image} alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div id="product-main-img">
                                    <div className="product-preview">
                                        <img src={this.state.image} alt=""/>
                                    </div>
                                </div>
                                <form onSubmit={this.addImage}>
                                    <input type="file" name="myImage" onChange= {this.onChange} required/>
                                    {/*<button type="submit">Upload</button>*/}
                                </form>

                                <button href="#" style={{border: "none", marginLeft: "40%"}}>
                                    <i className="fa fa-trash"></i>Удалить</button>
                            </div>

                            <div className="col-md-4">
                                <div className="product-details">
                                    <h2 className="product-name">
                                        <div className="form-group">
                                            <input className="input" type="text" name="title" placeholder="Название товара"
                                                   value={this.state.title} onChange={this.handleChange} required/>
                                        </div>
                                    </h2>
                                    <div>
                                        <h3 className="product-price">
                                            <div className="form-group">
                                                <input className="input" type="text" name="price" placeholder="Цена в рублях"
                                                       value={this.state.price} onChange={this.handleChange} required/>
                                            </div>
                                        </h3>
                                        <span className="product-available">
                                            {this.state.state}
                                        </span>
                                    </div>
                                    <p>
                                        <input className="input" type="textarea" name="description" placeholder="Описание"
                                               value={this.state.description} onChange={this.handleChange} required/>
                                    </p>

                                    <ul className="product-links">
                                        <li>Выберите категорию:</li>
                                        <li><input className="product-category" type="radio" name="category" id="category1"
                                                   value="AUTO_PRODUCT" onChange={this.handleChange} />
                                               <label htmlFor="category1">Автомобили</label>
                                        </li>
                                        <li><input className="product-category" type="radio" name="category" id="category2"
                                                   value="ACCESSORY" onChange={this.handleChange} />
                                            <label htmlFor="category2">Аксессуры</label>
                                        </li>
                                        <li><input className="product-category" type="radio" name="category" id="category3"
                                                   value="TOY" onChange={this.handleChange} />
                                            <label htmlFor="category3">Игрушки</label>
                                        </li>
                                        <li><input className="product-category" type="radio" name="category" id="category4"
                                                   value="REPAIRS" onChange={this.handleChange} />
                                            <label htmlFor="category4">Ремонт</label>
                                        </li>
                                        <li><input className="product-category" type="radio" name="category" id="category5"
                                                   value="ENTERTAINMENT" onChange={this.handleChange} />
                                            <label htmlFor="category5">Развлечения</label>
                                        </li>
                                        <li><input className="product-category" type="radio" name="category" id="category6"
                                                   value="SPORT" onChange={this.handleChange} />
                                                   <label htmlFor="category6">Спорт</label>
                                        </li>
                                        <li><input className="product-category" type="radio" name="category" id="category7"
                                                   value="EQUIPMENT" onChange={this.handleChange} />
                                            <label htmlFor="category7">Техника</label>
                                        </li>
                                        <li><input className="product-category" type="radio" name="category" id="category8"
                                                   value="OTHER" onChange={this.handleChange} />
                                            <label htmlFor="category8">Другое</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-md-push-1">
                                <button className="primary-btn order-submit"
                                        onClick={this.addProduct}>Добавить
                                </button>
                            </div>

                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ProductAdd