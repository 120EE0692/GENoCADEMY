import React from 'react';
import { FeatureContainer, FeatureButton } from './StatsElements';
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>🏆 Our Statistics 🏆 </h1>
      <p>450+ Students | 175+ Mentors | 60+ Tutors | 70+ Schools </p>
      <Link to="/signup"> 
      <FeatureButton>Register Now</FeatureButton> 
      </Link>
    </FeatureContainer>
  );
};

export default Feature;
