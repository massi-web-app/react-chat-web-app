import {ConversationChannelPageStyle} from "../utils/styles";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../utils/context/AuthContext";
import {useParams} from "react-router-dom";
import {getConversationMessages} from "../utils/api";
import {MessageType} from "../utils/types";
import {MessagePanel} from "../components/messages/MessagePanel";

export const ConversationChannelPage = () => {

    const {user} = useContext(AuthContext);

    const [messages, setMessages] = useState<MessageType[]>([]);

    const {id} = useParams();

    useEffect(() => {

        id && getConversationMessages(parseInt(id))
            .then(({data}) => {
                setMessages(data);
            })
            .catch((error) => console.log(error))
    }, [id])


    return (
        <ConversationChannelPageStyle>
           <MessagePanel messages={messages}/>
        </ConversationChannelPageStyle>
    );
};
