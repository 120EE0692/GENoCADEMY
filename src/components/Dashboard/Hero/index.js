import React, { useContext } from 'react';
import authContext from "../../../context/AuthContext";
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';
import SearchEducator from '../../SearchEducator';
const Hero = () => {
  const logInUserInfo = useContext(authContext);
    return (
    <HeroContainer>
      
      <HeroContent>
        <HeroItems>
          <HeroH1> Greetings{" "}
        <em className="name">{logInUserInfo.loginUserName?.toUpperCase()}</em>{"! "}</HeroH1>
          <HeroP> Turn Your Dreams Into Reality</HeroP>
          <HeroBtn> <SearchEducator value="Search for Mentor"/></HeroBtn>
          <Outlet /> 
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
