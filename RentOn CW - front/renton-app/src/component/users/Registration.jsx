import React, {Component} from 'react'
import AuthenticationService from '../../service/AuthenticationService';
import Header from "../Header";
import Navbar from "../Navbar";

class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            repassword: '',
            firstName: '',
            lastName: '',
            address: '',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.registerClicked = this.registerClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    registerClicked() {
        if (this.state.password===this.state.repassword){
            AuthenticationService
                .executeJwtRegister(
                    this.state.login,
                    this.state.password,
                    this.state.firstName,
                    this.state.lastName,
                    this.state.address,
                    this.state.phone)
                .then((response) => {
                    console.log(response.data);
                    this.props.history.push(`/successful`)
                }).catch(() => {
                    console.log("error")
                }
            )
        }else {
            let passwordState = document.getElementById("password-state");
            passwordState.innerText = "Пароли не совпадают!!!";
            passwordState.style.color = "red";

        }

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

                            <div className="col-md-7">
                                <div className="billing-details">
                                    <div className="section-title">
                                        <h3 className="title">Регистрация</h3>
                                    </div>
                                    <div className="section-title">
                                        <h4 id="password-state"></h4>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="email" name="login" placeholder="Login"
                                               value={this.state.login} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="password" name="password" placeholder="Password"
                                               value={this.state.password} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="password" name="repassword"
                                               placeholder="Repassword" value={this.state.repassword}
                                               onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="text" name="firstName" placeholder="First Name"
                                               value={this.state.firstName} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="text" name="lastName" placeholder="Last Name"
                                               value={this.state.lastName} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="number" name="phone" placeholder="Phone"
                                               value={this.state.phone} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="text" name="address" placeholder="Address"
                                               value={this.state.address} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <button href="#" className="primary-btn order-submit"
                                        onClick={this.registerClicked}>Зарегистрироваться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>


        )
    }
}

export default Registration