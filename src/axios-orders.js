
import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-ceb85.firebaseio.com/'
})

export default instance;