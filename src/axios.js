import axios from 'axios';

const instance = axios.create({
    baseURL: "https://ac-tinder.herokuapp.com",
});

export default instance;