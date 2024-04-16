import axios from "axios";
import { sessionToken } from "../Constants/localStorage";

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/'
});

client.interceptors.request.use((config) => {
    const token = localStorage.getItem(sessionToken);

    config.headers = {
        Authorization: `Bearer ${token}`
    }

    console.log(config);

    return config;
}, error => {
    return console.error(error);
});

export default client;