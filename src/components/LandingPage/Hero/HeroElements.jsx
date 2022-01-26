import styled from 'styled-components';
import ImgBg from '../../../assets/images/hero.png';

export const HeroContainer = styled.div`
  background: linear-gradient(to left, rgba(100, 255, 150, 0.2), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 600px;
  color: #fff;
  
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(1.25rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: #0B3F46;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  color: #339C97;
  letter-spacing: 1.2px;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 2.5rem;
  border: none;
  background: #CDE4DC;
  color: #000;
  transition: 0.2s ease-out;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 5px rgba(0,0,0,0.1);
    background: #acd2c5;
    transition: 0.2s ease-out;
  }
`;
