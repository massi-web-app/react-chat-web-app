import {
    MessageContainerStyle,
    MessageItemAvatar,
    MessageItemContainer,
    MessageItemContent,
    MessageItemDetails,
    MessageItemHeader,
} from "../../utils/styles";
import {MessageType} from "../../utils/types";
import {FC, useContext} from "react";
import {formatRelative} from 'date-fns';
import {AuthContext} from "../../utils/context/AuthContext";

type Props = {
    messages: MessageType[]
}
export const MessageContainer: FC<Props> = ({messages}) => {
    const {user}=useContext(AuthContext);
    return (
        <MessageContainerStyle>
            {messages.map((message) => (
               <MessageItemContainer key={message.id}>
                   <MessageItemAvatar/>
                   <MessageItemDetails>
                       <MessageItemHeader>
                           <span className="authorName" style={{
                               color:user?.id===message.author.id ? "#75757575" : "#5E8BFF"
                           }}>{message.author.firstName} {message.author.lastName}</span>
                           <span className="time">{formatRelative(new Date(message.createdAt), new Date())}</span>
                       </MessageItemHeader>
                       <MessageItemContent>
                           {message.content}
                       </MessageItemContent>
                   </MessageItemDetails>
               </MessageItemContainer>
            ))}

        </MessageContainerStyle>
    )


}