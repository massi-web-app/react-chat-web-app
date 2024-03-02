import axios, {AxiosRequestConfig} from 'axios';
import {CreateUserParams} from "./types";


const config: AxiosRequestConfig = {withCredentials: true};
const APP_URL = process.env.REACT_APP_API_URL;

console.log(`${APP_URL}/auth/register`);



export const postRegisterUser = async (data: CreateUserParams) =>
    axios.post(`${APP_URL}/auth/register`, data, config)
