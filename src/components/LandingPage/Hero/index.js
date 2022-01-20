import React from 'react';
import Navbar from '../../nav/Nav';
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
          <HeroH1>Let's gdf fdghdfghfd together!</HeroH1>
          <HeroP> lorem ipsum lorem lorem ipsum lorem psum lorem lorem ipsum lorem lorem ipsum lorem</HeroP>
          <HeroBtn>lorem lorem</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
