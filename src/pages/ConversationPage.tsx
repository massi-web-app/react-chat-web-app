import { ConversationPanel } from "../components/conversations/ConversationPanel";
import { ConversationSidebar } from "../components/conversations/ConversationSidebar";
import { Page } from "../utils/styles";
import { Outlet, useParams } from "react-router-dom";
import mockConversations from "../__mocks__/covnersations";

export const ConversationPage = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Page>
      <ConversationSidebar conversations={mockConversations} />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};
