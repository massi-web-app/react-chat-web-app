import {ConversationChannelPageStyle} from "../../utils/styles";
import {useContext} from "react";
import {AuthContext} from "../../utils/context/AuthContext";
import {MessagePanel} from "../messages/MessagePanel";

export const ConversationPanel = () => {
    const {user} = useContext(AuthContext)
    return (
        <ConversationChannelPageStyle>
            {/*<MessagePanel/>*/}
        </ConversationChannelPageStyle>
    );
};
