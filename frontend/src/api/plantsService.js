import Axios from 'axios';

const plantService = Axios.create({
    baseURL: 'https://localhost:5001/api/',
    headers: {}
});

export default plantService;
