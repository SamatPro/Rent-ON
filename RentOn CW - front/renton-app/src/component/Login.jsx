import React, {Component} from 'react'
import AuthenticationService from '../service/AuthenticationService';
import Navbar from "./Navbar";
import {Redirect} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            hasLoginFailed: '',
            userId:'',
            success: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService
            .executeJwtLogin(this.state.login, this.state.password)
            .then((response) => {
                console.log(response.data);
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.login, response.data.value)
                const id = response.data.userId
                localStorage.setItem("userId", id)
                    this.setState({
                        success:true,
                        userId: id,
                    })
                // this.props.history.push(`/user/${id}`)
            }).catch(() => {
                this.setState({success: false})
                this.setState({hasLoginFailed: 'Неправильный логин и/или пароль'})
        })

    }

    render() {
        if (this.state.success) {
            return(<Redirect to={"/user/"+this.state.userId}/>)
        } else {
            return (
                <div>
                    <Navbar/>

                    <div className="section">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-7">
                                    <div className="billing-details">
                                        <div className="section-title">
                                            <h3 className="title">Вход</h3>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="email" name="login" placeholder="Login"
                                                   value={this.state.login} onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="password" name="password"
                                                   placeholder="Password"
                                                   value={this.state.password} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <button href="#" className="primary-btn order-submit"
                                            onClick={this.loginClicked}>Войти
                                    </button>
                                    <h4 style={{color: "red"}}>
                                        {this.state.hasLoginFailed}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Login