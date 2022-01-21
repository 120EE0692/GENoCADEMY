import { useState, useEffect, useContext } from "react";
import CommentForm from "./DiscussionForum";
import Comment from "./Discussion";
import { createComment as createCommentApi, updateComment as updateCommentApi, } from "./PlaceHolderComment";
import { collection, doc, deleteDoc, getDocs, setDoc } from "firebase/firestore";
import { store } from "../../config/firebase"

import authContext from "../../context/AuthContext"

const Comments = ({ commentsUrl, currentUserId }) => {

  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const loggedInuserInfo = useContext(authContext)

  useEffect(() => {
    try {
      (async () => {
        const query = await getDocs(collection(store, "comment"))
        setBackendComments(query.docs.map(doc => (doc.data())))
      })();
    }
    catch (error) {
      console.log(error.message)
    }
  }, []);

  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const getReplies = (commentId) =>
    backendComments
      ?.filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const addComment = (text, parentId) => {
    const { id, loginUserName } = loggedInuserInfo
    createCommentApi(text, parentId, id, loginUserName).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          setDoc(doc(store, "comment", commentId), { ...backendComment, body: text })
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      (() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        deleteDoc(doc(store, "comment", commentId));
        setBackendComments(updatedBackendComments);
      })();
    }
  };

  return (
    <div className="comments">
      <h3 className="comments-title">Questions</h3>
      <div className="comment-form-title">Post Questions</div>
      <CommentForm submitLabel="Send" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
