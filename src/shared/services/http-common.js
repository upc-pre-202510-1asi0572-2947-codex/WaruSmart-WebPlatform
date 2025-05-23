import axios from "axios";
import { authenticationInterceptor } from "../../iam/services/authentication.interceptor.js";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const http = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' } // Eliminado 'Access-Control-Allow-Origin'
});

http.interceptors.request.use(authenticationInterceptor);

export default http;