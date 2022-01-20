import styled from 'styled-components';
import FeaturePic from '../../../assets/images/stats.png';

export const FeatureContainer = styled.div`
  background: linear-gradient(to left, rgba(16, 66, 82, 0.7), rgba(16, 11, 7, 0.3)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 3vw, 3rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 2rem;
  border: none;
  background: #CDE4DC;
  color: #000;
  transition: 0.2s ease-out;
  border-radius: 15px;
  &:hover {
    
    background: #acd2c5;
    transition: 0.2s ease-out;
    box-shadow: 3px 5px rgba(0,0,0,0.1);
    cursor: pointer;
  }
`;
