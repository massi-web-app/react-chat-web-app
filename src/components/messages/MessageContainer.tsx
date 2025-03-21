import {
    MessageContainerStyle,
    MessageItemAvatar,
    MessageItemContainer,
    MessageItemContent,
    MessageItemDetails,
    MessageItemHeader,
} from "../../utils/styles";
import {MessageType, User} from "../../utils/types";
import {FC, useContext, useEffect} from "react";
import {formatRelative} from 'date-fns';
import {AuthContext} from "../../utils/context/AuthContext";

type Props = {
    messages: MessageType[]
}

type FormatMessageType = {
    user?: User, message: MessageType
}

export const FormatMessage: FC<FormatMessageType> = ({message, user}) => {
    return (
        <MessageItemContainer key={message.id}>
            <MessageItemAvatar/>
            <MessageItemDetails>
                <MessageItemHeader>
                           <span className="authorName" style={{
                               color: user?.id === message.author.id ? "#75757575" : "#5E8BFF"
                           }}>{message.author.firstName} {message.author.lastName}</span>
                    <span className="time">{formatRelative(new Date(message.createdAt), new Date())}</span>
                </MessageItemHeader>
                <MessageItemContent>
                    {message.content}
                </MessageItemContent>
            </MessageItemDetails>
        </MessageItemContainer>
    )
}


export const MessageContainer: FC<Props> = ({messages}) => {
    const {user} = useContext(AuthContext);
    const formatMessages = () => {

        return messages.map((message, index, arr) => {

            const currentMessage = arr[index];
            const nextMessage = arr[index + 1];

            if (arr.length === index + 1) {
                return <FormatMessage user={user} message={message}/>
            }

            if (currentMessage.author.id === nextMessage.author.id) {
                return (
                    <MessageItemContainer key={message.id}>
                        <MessageItemContent padding="0 0 0 70px">
                            {message.content}
                        </MessageItemContent>
                    </MessageItemContainer>
                )
            } else {
                return <FormatMessage user={user} message={message}/>
            }

        })


    }


    useEffect(() => {

        formatMessages();
    })

    return (
        <MessageContainerStyle>
            {formatMessages()}

            {/*{messages.map((message) => (*/}

            {/*    <MessageItemContainer key={message.id}>*/}
            {/*        <MessageItemAvatar/>*/}
            {/*        <MessageItemDetails>*/}
            {/*            <MessageItemHeader>*/}
            {/*               <span className="authorName" style={{*/}
            {/*                   color: user?.id === message.author.id ? "#75757575" : "#5E8BFF"*/}
            {/*               }}>{message.author.firstName} {message.author.lastName}</span>*/}
            {/*                <span className="time">{formatRelative(new Date(message.createdAt), new Date())}</span>*/}
            {/*            </MessageItemHeader>*/}
            {/*            <MessageItemContent>*/}
            {/*                {message.content}*/}
            {/*            </MessageItemContent>*/}
            {/*        </MessageItemDetails>*/}
            {/*    </MessageItemContainer>*/}

            {/*))}*/}


        </MessageContainerStyle>
    )


}