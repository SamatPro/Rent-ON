import axios from 'axios'

const API_URL = 'http://localhost:8080'
const API_IMG_URL = 'http://localhost:8080/image/'


class Service {

    uploadPhoto(file) {
        return axios.post(`${API_URL}/upload`, {
            file
        })
    }

    getProduct(id){
        return axios.get(`${API_URL}/products/${id}`)
    }


}

export default new Service()