import axios from "axios";

export const httpRequst = axios.create({
    baseURL: 'http://localhost:5000'
});