import axios, {AxiosRequestConfig} from 'axios';
import {CreateUserParams} from "./types";


const API_URL = process.env.REACT_APP_API_URL;





const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = {withCredentials: true};

console.log("axios",axiosClient);

export const postRegisterUser = async (data: CreateUserParams) =>
    axiosClient.post(`/auth/register`, data, config)

