import {MessagePanelStyle} from "../../utils/styles";
import {MessageContainer} from "./MessageContainer";
import {MessageInputField} from "./MessageInputField";
import {MessageType} from "../../utils/types";
import {FC} from "react";

type Props = {
    messages: MessageType[]
}
export const MessagePanel: FC<Props> = ({messages}) => {

    return (
        <MessagePanelStyle>
            <MessageContainer messages={messages}/>
            <MessageInputField/>
        </MessagePanelStyle>
    )
}