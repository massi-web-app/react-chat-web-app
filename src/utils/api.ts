import axios, {AxiosRequestConfig} from 'axios';
import {CreateUserParams, User, UserCredentialParams} from "./types";


const API_URL = process.env.REACT_APP_API_URL;


const axiosClient = axios.create({baseURL: API_URL});
const config: AxiosRequestConfig = {withCredentials: true};

export const postRegisterUser = (data: CreateUserParams) => axiosClient.post(`/auth/register`, data, config);


export const postLoginUser = (data: UserCredentialParams) => (axiosClient.post(`/auth/login`, data, config));


export const getUserAuth = async () => axiosClient.get<User>(`/auth/status`, config);


export const getConversations= async ()=>axiosClient.get(`/conversations`,config);


export const getConversationMessages=async (id:number)=>axiosClient.get(`/messages/${id}`,config)