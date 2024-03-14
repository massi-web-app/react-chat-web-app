import {ConversationChannelPageStyle} from "../../utils/styles";
import {useContext} from "react";
import {AuthContext} from "../../utils/context/AuthContext";

export const ConversationPanel = () => {
    const {user} = useContext(AuthContext)
    return (
        <ConversationChannelPageStyle>
            {user && user.email}
        </ConversationChannelPageStyle>
    );
};
