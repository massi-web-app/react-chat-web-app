import {io, WebSocket} from 'socket.io-client';
import {createContext, useContext} from "react";

export const socket = io(process.env.REACT_APP_WEBSOCKET_URL);
export const SocketContext=createContext(socket);


export const useSocketContext=()=>{
    return useContext(SocketContext);
}