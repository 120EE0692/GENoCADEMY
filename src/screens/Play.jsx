import React from "react";
import { Outlet } from "react-router-dom";

import SearchEducator from "../../src/components/SearchEducator"

const Playground = () => {
  return (
    <>
      <SearchEducator />
      <Outlet />
    </>
  );
};

export default Playground;
