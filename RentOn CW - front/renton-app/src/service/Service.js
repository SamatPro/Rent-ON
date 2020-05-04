import axios from 'axios'

const API_URL = 'http://localhost:8080'


class Service {

    uploadPhoto(file) {
        return axios.post(`${API_URL}/upload`, {
            file
        })
    }

}

export default new Service()