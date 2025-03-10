import axios from 'axios'
import Cookies from 'universal-cookie';

const API_URL = 'http://localhost:8080'
const cookies = new Cookies();

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeJwtLogin(login, password) {
        console.log(login);
        return axios.post(`${API_URL}/login`, {
            login,
            password
        })
    }

    executeJwtRegister(login, password, firstName, lastName, address, phone) {
        console.log(login);
        return axios.post(`${API_URL}/registration`, {
            login,
            password,
            firstName,
            lastName,
            address,
            phone
        })
    }

    updateUser(password, firstName, lastName, address, phone){
        this.setupAxiosInterceptors();
        return axios.put(`${API_URL}/update`, {
            password,
            firstName,
            lastName,
            address,
            phone
        })
    }

    addProduct(title, price, description, category){
        return axios.post(`${API_URL}/products/`, {
            title,
            price,
            description,
            category
        })
    }

    addToFavourites(id){
        this.setupAxiosInterceptors();
        return axios.post(`${API_URL}/products/${id}/favourite`)
    }

    registerSuccessfulLoginForJwt(username, token) {
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        localStorage.setItem('AUTH', token)
        cookies.set('AUTH', token, { path: '/' });
    }


    logout() {
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        localStorage.removeItem('AUTH');
        localStorage.removeItem('userId');
    }

    isUserLoggedIn(){
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        console.log(user)
        return user !== null;

    }

    getLoggedInUserName() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    getUserData(id){
        this.setupAxiosInterceptors();
        axios.get(`${API_URL}/user/${id}`)
            .then(res=>{
                    return res.data
                }
            )
    }

    rent(id){
        this.setupAxiosInterceptors();
        return axios.post(`${API_URL}/products/${id}/rent`)
    }

    getFeedbacks(){
        this.setupAxiosInterceptors();
        return axios.get(`${API_URL}/feedbacks`)
    }

    getFeedback(id){
        this.setupAxiosInterceptors();
        return axios.get(`${API_URL}/feedback/${id}`)
    }

    getRents(){
        this.setupAxiosInterceptors();
        return axios.get(`${API_URL}/rents`)
    }

    getRent(id){
        this.setupAxiosInterceptors();
        return axios.get(`${API_URL}/rent/${id}`)
    }

    getProductsByUser(id){
        this.setupAxiosInterceptors();
        return axios.get(`${API_URL}/user/${id}/products`)
    }

    getFavourites(){
        this.setupAxiosInterceptors();
        return axios.get(`${API_URL}/products/favourites`)
    }

    accept(rentId, status){
        this.setupAxiosInterceptors();
        const form = new FormData();
        form.append("status", status)
        return axios.put(`${API_URL}/feedback/${rentId}/accept`, form)
    }
    setupAxiosInterceptors() {
        axios.defaults.headers.common['AUTH'] = localStorage.getItem('AUTH');
    }
}

export default new AuthenticationService()