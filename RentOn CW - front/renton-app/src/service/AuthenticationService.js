import axios from 'axios'
import Cookies from 'universal-cookie';

// const API_URL = 'http://localhost:8080'
// const cookies = new Cookies();

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const TOKEN = 'token'

class AuthenticationService {

    executeJwtLogin(login, password) {
        // console.log(login);
        // return axios.post(`${API_URL}/login`, {
        //     login,
        //     password
        // })
    }

    executeJwtRegister(login, password, firstName, lastName, address, phone) {
        // console.log(login);
        // return axios.post(`${API_URL}/register`, {
        //     login,
        //     password,
        //     firstName,
        //     lastName,
        //     address,
        //     phone
        // })
    }

    registerSuccessfulLoginForJwt(username, token) {
        // localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        // localStorage.setItem('AUTH', token)
        // cookies.set('AUTH', token, { path: '/' });
    }


    logout() {
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        localStorage.removeItem(TOKEN);
    }

    isUserLoggedIn() {
        // let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        // if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        axios.defaults.headers.common['AUTH'] = token;
    }
}

export default new AuthenticationService()