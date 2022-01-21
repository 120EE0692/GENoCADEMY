import { useContext } from "react";
//css
import "./DiscussionSection.css";
//components
import Comments from "./Discussions";
//context
import authContext from "../../context/AuthContext"

const DiscussionForumPage = () => {
  const { id } = useContext(authContext)
  return (
    <div>
      <Comments currentUserId={id} />
    </div>
  );
};

export default DiscussionForumPage;
