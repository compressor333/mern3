import axios from "axios"

const API_URL = '/api/users'

const register = async (userData) => {
    const responce = await axios.post(API_URL, userData)

    if(responce.data) {
        localStorage.setItem('user', JSON.stringify(responce.data))
    }

    return responce.data
}


const authService = {
    register
}

export default authService

