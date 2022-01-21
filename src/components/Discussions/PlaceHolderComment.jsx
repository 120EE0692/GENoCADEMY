import { store } from "../../config/firebase"
import { doc, setDoc } from "firebase/firestore";

export const createComment = async (text, parentId = null, id, loginUserName) => {
  const comment = {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: id,
    username: loginUserName,
    createdAt: new Date().toISOString(),
  };
  setDoc(doc(store, "comment", comment.id), comment);
  return comment;
};

export const updateComment = async (text) => {
  return { text };
};

