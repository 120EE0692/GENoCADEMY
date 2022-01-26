import React from 'react';
import Navbar from '../../nav/Nav';
import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
    return (
    <HeroContainer>
      
      <HeroContent>
        <HeroItems>
          <HeroH1>Gen-o-Cademy!</HeroH1>
          <HeroP>Coming Together is a Beginning <br /> Keeping Together is Progress<br /> Working Together is Success.</HeroP>
          <HeroBtn ><Link to="/dashboard" className='HeroBtnLink' style={{textDecoration:"none",color:"#339C97"}}>Dashboard </Link></HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
