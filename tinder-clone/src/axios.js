import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nguyenkha2904-tinder-backend.herokuapp.com'
})
export default instance;

