import React, { useState } from "react";

import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const DirectChatPage = () => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

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
    <ChatEngine
      height="100vh"
      userName="Abhas"
      userSecret="pass1234"
      projectID="abc495ef-5166-41de-94fe-1c38615663a4"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default DirectChatPage;
