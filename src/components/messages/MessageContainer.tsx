import {
    MessageContainerStyle,
    MessageItemAvatar,
    MessageItemContainer,
    MessageItemDetails, MessageItemHeader,
} from "../../utils/styles";
import {MessageType} from "../../utils/types";
import {FC} from "react";


type Props = {
    messages: MessageType[]
}
export const MessageContainer: FC<Props> = ({messages}) => {

    return (
        <MessageContainerStyle>
            {messages.map((message) => (
               <MessageItemContainer>
                   <MessageItemAvatar/>
                   <MessageItemDetails>
                       <MessageItemHeader>
                           <span className="name">{message.author.firstName} {message.author.lastName}</span>
                           <span className="">{new Date(message.createdAt).toLocaleString()}</span>
                       </MessageItemHeader>

                   </MessageItemDetails>
               </MessageItemContainer>
            ))}
        </MessageContainerStyle>
    )


}