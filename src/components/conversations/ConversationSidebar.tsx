import {
  ConversationSidebarStyle,
  ConversationSidebaritem,
  ConversationSidebarContainer,
  ConversationSidebarHeader,
} from "../../utils/styles";
import { useNavigate } from "react-router-dom";
import { TbEdit as AddConversations } from "react-icons/tb";
import { FC } from "react";
import { ConversationType } from "../../utils/types";

import styles from "./index.module.scss";

type Props = {
  conversations: ConversationType[];
};

export const ConversationSidebar: FC<Props> = ({ conversations }) => {
  const navigate = useNavigate();

  return (
    <ConversationSidebarStyle>
      <ConversationSidebarHeader>
        <h1>converations</h1>
        <AddConversations size={30} />
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationSidebaritem
            key={conversation.id}
            onClick={() => navigate(`/conversations/${conversation.id}`)}
          >
            <div className={styles.converstionAvatar}></div>
            <div>
              <span className={styles.conversationName}>
                {conversation.name}
              </span>
              <span className={styles.conversationLastMessage}>
                {conversation.lastMessage}
              </span>
            </div>
          </ConversationSidebaritem>
        ))}
      </ConversationSidebarContainer>
    </ConversationSidebarStyle>
  );
};
