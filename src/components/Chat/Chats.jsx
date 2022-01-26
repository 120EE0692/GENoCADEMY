import React, { useState, useContext, useEffect } from "react";

import { ChatEngine, getOrCreateChat } from "react-chat-engine";

import authContext from "../../context/AuthContext"

const DirectChatPage = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true)
  const { id, loginUserName } = useContext(authContext)

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  useEffect(() => {
    if (!id)
      return;
    (async () => {
      const user = await fetch('https://api.chatengine.io/users/', {
        method: "PUT",
        headers: { "PRIVATE-KEY": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          "username": `${loginUserName}`,
          "secret": `${id}`,
        })
      })
    })();
    setLoading(false);

  }, [loading, id])

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <>{
      !loading && <ChatEngine
        height='100vh'
        userName={loginUserName}
        userSecret={id}
        projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      />}
    </>
  );
};

export default DirectChatPage;
