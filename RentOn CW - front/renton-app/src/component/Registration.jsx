import React, {Component} from 'react'
import AuthenticationService from '../service/AuthenticationService';

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
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.login, response.data.value)
                this.props.history.push(`/login`)
            }).catch(() => {
            }
        )

    }

    render() {
        return (
            <div>
                <div class="section">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-7">
                                <div class="billing-details">
                                    <div class="section-title">
                                        <h3 class="title">Регистрация</h3>
                                    </div>
                                    <div class="form-group">
                                        <input class="input" type="email" name="login" placeholder="Login"
                                               value={this.state.login} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="password" name="password" placeholder="Password"
                                               value={this.state.password} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="password" name="repassword"
                                               placeholder="Repassword" value={this.state.repassword}
                                               onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group">
                                        <input class="input" type="text" name="first-name" placeholder="First Name"
                                               value={this.state.firstName} onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group">
                                        <input class="input" type="text" name="last-name" placeholder="Last Name"
                                               value={this.state.lastName} onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group">
                                        <input class="input" type="text" name="address" placeholder="Address"
                                               value={this.state.address} onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group">
                                        <input class="input" type="tel" name="tel" placeholder="Phone"
                                               value={this.state.phone} onChange={this.handleChange}/>
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


        )
    }
}

export default Registration