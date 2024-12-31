import {MessagePanelBody, MessagePanelStyle} from "../../utils/styles";
import {MessageContainer} from "./MessageContainer";
import {MessageInputField} from "./MessageInputField";
import React, {FC} from "react";
import {MessagePanelHeader} from "./MessagePanelHeader";
import {MessageType} from "../../utils/types";

type Props = {
    messages: MessageType[]
}
export const MessagePanel: FC<Props> = ({messages}) => {

    return (
        <MessagePanelStyle>
            <MessagePanelHeader></MessagePanelHeader>
            <MessagePanelBody>
                <MessageContainer messages={messages}/>
                <MessageInputField/>
            </MessagePanelBody>
        </MessagePanelStyle>
    )
}