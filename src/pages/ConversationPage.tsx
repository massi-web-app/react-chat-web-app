import {ConversationPanel} from "../components/conversations/ConversationPanel";
import {ConversationSidebar} from "../components/conversations/ConversationSidebar";
import {Page} from "../utils/styles";
import {Outlet, useParams} from "react-router-dom";

export const ConversationPage = () => {
  const { id } = useParams();


  return (
    <Page>
      <ConversationSidebar conversations={[]} />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};
