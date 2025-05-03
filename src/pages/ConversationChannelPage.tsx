import {ConversationChannelPageStyle} from "../utils/styles";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../utils/context/AuthContext";
import {useParams} from "react-router-dom";
import {getConversationMessages} from "../utils/api";
import {MessageEventPayload, MessageType} from "../utils/types";
import {MessagePanel} from "../components/messages/MessagePanel";
import {useSocketContext} from "../utils/context/SocketContext";

export const ConversationChannelPage = () => {

    const {user} = useContext(AuthContext);

    const socket = useSocketContext();

    const [messages, setMessages] = useState<MessageType[]>([]);

    const {id} = useParams();

    useEffect(() => {
        id && getConversationMessages(parseInt(id))
            .then(({data}) => {
                setMessages(data);
            })
            .catch((error) => console.log(error))
    }, [id]);

    useEffect(() => {

        socket.on('connected', () => {
            console.log("connected");
        });

        socket.on('onMessage', (payload: MessageEventPayload) => {
            const {conversation, ...message} = payload;
              setMessages((prev) => [message, ...prev]);
        });


        return () => {
            socket.off('connected');
            socket.off('onMessage');
        }


    }, []);


    return (
        <ConversationChannelPageStyle>
            <MessagePanel messages={messages}/>
        </ConversationChannelPageStyle>
    );
};
