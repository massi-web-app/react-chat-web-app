import styled from "styled-components";
import { PageProps } from "./styleTypes";

export const SIDEBAR_WIDTH = 400;

export const Page = styled.div<PageProps>`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.alignItems};
  height: 100%;
`;

export const InputContainer = styled.div`
  box-sizing: border-box;
  background-color: #131313;
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
  padding: 12px 0;
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
  & h1 {
    font-weight: 400;
  }
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarContainer = styled.div``;

export const ConversationSidebaritem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 32px;
  border-bottom: 1px solid #5454543d;
  box-sizing: border-box;
  background-color: #131313;
`;
