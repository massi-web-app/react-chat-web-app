import styled from "styled-components";
import {InputContainerProps, MessageItemContentProps, PageProps} from "./styleTypes";

export const SIDEBAR_WIDTH = 400;

export const Page = styled.div<PageProps>`
    display: ${(props) => props.display};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.alignItems};
    height: 100%;
`;

export const InputContainer = styled.div<InputContainerProps>`
    box-sizing: border-box;
    background-color: ${(prop) => prop.backgroundColor || '#131313'};
    padding: 12px 16px;
    border-radius: 10px;
    width: 100%;
`;

export const InputLabel = styled.label`
    display: block;
    margin: 4px 0;
    color: #8f8f8f;
    font-size: 14px;
`;

export const InputField = styled.input`
    width: 100%;
    background: inherit;
    border: none;
    outline: none;
    font-size: 18px;
    color: #fff;
`;

export const Button = styled.button`
    width: 100%;
    background-color: #2b09ff;
    border: none;
    outline: none;
    padding: 17px 0;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
`;

export const ConversationSidebarStyle = styled.aside`
    background-color: #1a1a1a;
    height: 100%;
    width: ${SIDEBAR_WIDTH}px;
    position: absolute;
    left: 0;
    top: 0;
    border-right: 1px solid #5454543d;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
        /* width: 10px; */
        /* height: 5px; */
    }

    &::-webkit-scrollbar-thumb {
        /* background-color: #2b2b2b; */
    }
`;

export const ConversationSidebarHeader = styled.header`
    display: flex;
    position: fixed;
    box-sizing: border-box;
    left: 0;
    width: ${SIDEBAR_WIDTH}px;
    top: 0;
    justify-content: space-between;
    border-bottom: 1px solid #151515;
    align-items: center;
    padding: 0 32px;
    background-color: #151515;
    height: 100px;
    border-bottom: 1px solid #484848;

    & h1 {
        font-weight: 400;
    }
`;

export const ConversationChannelPageStyle = styled.div`
    height: 100%;
    margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarContainer = styled.div`
    margin-top: 100px;

`;

export const ConversationSidebarItem = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 18px 32px;
    border-bottom: 1px solid #5454543d;
    box-sizing: border-box;
    background-color: #131313;
`;


export const OverlayStyle = styled.div`
    height: 100%;
    width: 100%;
    background-color: #0000008a;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;


export const ModalContainerStyle = styled.div`
    background-color: #121212;
    width: 650px;
    border-radius: 7px;
`;

export const ModalHeaderStyle = styled.header`
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    & h2 {
        font-weight: 400;
        margin: 0;
    }
`;

export const ModalContextBodyStyle = styled.div`
    padding: 24px;
`;

export const TextField = styled.textarea`
    width: 100%;
    background: inherit;
    border: none;
    outline: none;
    font-size: 18px;
    color: #fff;
    margin: 4px 0;
    resize: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;


export const MessagePanelStyle = styled.div`
    background: inherit;
    height: 100%;
    box-sizing: border-box;
    position: relative;
`
export const MessagePanelBody = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 32px;
`

export const MessageContainerStyle = styled.div`
    height: 100%;
    box-sizing: border-box;
    padding: 10px 15px;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
`;


export const MessageInputContainer = styled.div`
    box-sizing: border-box;
    background-color: #101010;
    border-radius: 5px;
    width: 100%;
    padding: 20px 25px;
`;

export const MessageInput = styled.input`
    background-color: inherit;
    outline: none;
    border: none;
    color: #454545;
    font-family: inherit;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    margin: 4px 0;
`;

export const MessageItemContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 5px 0;

`

export const MessageItemAvatar = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #ff5a5a;
`

export const MessageItemDetails = styled.div`
`;

export const MessageItemHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    .time {
        color: #6D6D6D;
        font-size: 12px;
        font-weight: bold;
    }

    .authorName {
        font-weight: bold;
        font-size: 16px;

    }
`

export const MessageItemContent = styled.div<MessageItemContentProps>`

    padding: ${({padding}) => padding}

`;


export const MessagePanelHeaderStyle = styled.header`
    background: #151515;
    border-bottom: 1px solid #545454;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    left: 0;
`;
