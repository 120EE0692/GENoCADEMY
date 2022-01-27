import React from 'react';
import Navbar from '../../nav/Nav';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const sm = useMediaQuery('(min-width:425px)')
    return (
    <HeroContainer>
      
      <HeroContent>
        <HeroItems>
          <HeroH1>Welcome to <br/> Gen-o-Cademy</HeroH1>
        { sm ? (<HeroP>Coming Together is a Beginning, <br /> Keeping Together is Progress,<br /> Working Together is Success.</HeroP>) : <HeroP><br/><br/><br/><br/></HeroP>}
          <HeroBtn ><Link to="/dashboard" className='HeroBtnLink' style={{textDecoration:"none",color:"#339C97"}}>Dashboard </Link></HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
