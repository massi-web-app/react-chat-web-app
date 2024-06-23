import {ConversationPanel} from "../components/conversations/ConversationPanel";
import {ConversationSidebar} from "../components/conversations/ConversationSidebar";
import {Page} from "../utils/styles";
import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getConversations} from "../utils/api";
import {ConversationType} from '../utils/types';

export const ConversationPage = () => {
    const {id} = useParams();
    const [conversations,setConversations]=useState<ConversationType[]>([]);
    useEffect(() => {
        getConversations()
            .then(({data}) => {
                console.log(data);
                setConversations(data);
            })
            .catch((error) => console.log(error));

        },[])


    return (
        <Page>
            <ConversationSidebar conversations={conversations}/>
            {!id && <ConversationPanel/>}
            <Outlet/>
        </Page>
    );
};
