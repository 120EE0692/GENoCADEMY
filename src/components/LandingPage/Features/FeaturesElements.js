import styled from 'styled-components';

export const ServicesContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background:#DDEEDF;
  color: #001a00;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
 
`;

export const ServiceCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
  
`;

export const ServiceImg = styled.img`
  height: 200px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 5px 5px #B4D3C8;
  border-radius: 145px;
`;

export const ServicesHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ServiceTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
 
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.25rem;
  padding-bottom: 2rem;
  text-align: center;
`;

export const ServiceDesc = styled.p`
  margin-bottom: 1rem;
`;

