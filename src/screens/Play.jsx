import React from "react";
import { Outlet } from "react-router-dom";
import DirectChatPage from "../components/Chat/Chats";
import SearchEducator from "../../src/components/SearchEducator";

const Playground = () => {
  return (
    <>
       <SearchEducator/>
      <Outlet /> 
      {/* <DirectChatPage /> */}
    </>
  );
};

export default Playground;
