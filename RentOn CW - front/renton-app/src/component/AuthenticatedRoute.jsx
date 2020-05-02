import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class AuthenticatedRoute extends Component {
    render() {
        return
            if (AuthenticationService.isUserLoggedIn()) {
                return <Route {...this.props} />
            } else {
                return <Redirect to="/" />
            }

    }
}

export default AuthenticatedRoute