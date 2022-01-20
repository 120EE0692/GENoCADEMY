import React from "react";
import ChatBot from "react-simple-chatbot";
import styled, { ThemeProvider } from "styled-components";

const CenterAlign = styled.div`
  margin: 0 auto;
`;
const theme = {
  background: "#F1FEFC",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#0B3F46",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#CDE4DC",
  botFontColor: "#4a4a4a",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "hi",
    message: "Hi I am your learning assistant! What is your name?",
    trigger: "intro",
  },
  {
    id: "intro",
    user: true,
    trigger: "name",
  },
  {
    id: "name",
    message: "Hi {previousValue}, which category do you belong to?",
    trigger: "cat",
  },
  {
    id: "cont2",
    message: "Do you want to ask more questions?",
    trigger: "yn",
  },
  {
    id: "cont3",
    message: "Do you want to ask more questions?",
    trigger: "yn3",
  },
  {
    id: "cont4",
    message: "Do you want to ask more questions?",
    trigger: "yn4",
  },
  {
    id: "cont1",
    message: "Do you want to change your category?",
    trigger: "yn1",
  },
  {
    id: "yn3",
    options: [
      { value: 1, label: "Yes", trigger: "cat1" },
      { value: 2, label: "No", trigger: "cont1" },
    ],
  },
  {
    id: "yn4",
    options: [
      { value: 1, label: "Yes", trigger: "cat3" },
      { value: 2, label: "No", trigger: "cont1" },
    ],
  },
  {
    id: "yn",
    options: [
      { value: 1, label: "Yes", trigger: "cat2" },
      { value: 2, label: "No", trigger: "cont1" },
    ],
  },
  {
    id: "yn1",
    options: [
      { value: 1, label: "Yes", trigger: "cat" },
      { value: 2, label: "No", trigger: "over" },
    ],
  },
  {
    id: "over",
    message: "Thank you for interacting with me :)",
    end: true,
  },

  {
    id: "cat",
    options: [
      { value: 1, label: "Student", trigger: "cat1" },
      { value: 2, label: "Mentor", trigger: "cat2" },
      { value: 3, label: "Tutor", trigger: "cat3" },
      { value: 3, label: "Exit", end: true },
    ],
  },
  {
    id: "cat1",
    message: "Great! What questions do you have?",
    trigger: "preteencat",
  },
  {
    id: "preteencat",
    options: [
      { value: 1, label: "Student benefits?", trigger: "preteencat1" },
      { value: 2, label: "How to update my Profile?", trigger: "preteencat2" },
    ],
  },
  {
    id: "preteencat1",
    message: "Student benefits?",
    trigger: "ans1",
  },
  {
    id: "ans1",
    message:
      "I am so happy that you are intrested in us. XYZ is an online mentorship platform that helps students be more focussed and streamlined towards their goals. ",
    trigger: "cont3",
  },
  {
    id: "preteencat2",
    message:
      "Sure, I will guide you through that! All you ned to do is Sign in with your existing account. Go to my profile and update the information. It is as simple as that ;)",
    trigger: "cont3",
  },

  {
    id: "cat2",
    message: "What questions do you have about AQI?",
    trigger: "teencat",
  },
  {
    id: "teencat",
    options: [
      { value: 1, label: " AQI stands for?", trigger: "teencat1" },
      { value: 2, label: "More about AQI..", trigger: "teencat2" },
    ],
  },
  {
    id: "teencat1",
    message: "Air Quality Index. What about AQI do you want to explore?",
    trigger: "period",
  },
  {
    id: "period",
    options: [
      { value: 1, label: "How does the AQI work?", trigger: "period1" },
      { value: 2, label: "What is normal AQI?", trigger: "period2" },
    ],
  },
  {
    id: "period1",
    message:
      "Check out this link: https://www.airnow.gov/aqi/aqi-basics/#:~:text=How%20does%20the%20AQI%20work,300%20represents%20hazardous%20air%20quality.",
    trigger: "cont2",
  },
  {
    id: "period2",
    message: "Check out here: https://aqicn.org/scale/",
    trigger: "cont2",
  },
  {
    id: "teencat2",
    message: "What do you want to know about AQI?",
    trigger: "si",
  },
  {
    id: "si",
    options: [
      {
        value: 1,
        label: "What Does the Air Quality Index Really Show Us?",
        trigger: "si1",
      },
      { value: 2, label: "How to improve AQI?", trigger: "si2" },
    ],
  },
  {
    id: "si1",
    message:
      "Check out this link: https://fit.thequint.com/health-news/explaining-air-quality-index",
    trigger: "cont2",
  },
  {
    id: "si2",
    message:
      "Here is something that can help: https://www.aqi.in/blog/25-tips-to-curb-air-pollution/",
    trigger: "cont2",
  },

  {
    id: "cat3",
    message: "What Water quality problems / questions do you have?",
    trigger: "adcat",
  },
  {
    id: "adcat",
    options: [
      { value: 1, label: "Water quality index", trigger: "adcat1" },
      { value: 2, label: "Water pollution", trigger: "adcat2" },
    ],
  },
  {
    id: "adcat1",
    message: "What common question about WQI do you have?",
    trigger: "qns",
  },
  {
    id: "qns",
    options: [
      {
        value: 1,
        label: "What is water quality and why is it important?",
        trigger: "no",
      },
      {
        value: 2,
        label: "What are the 6 main indicators of water quality?",
        trigger: "ov",
      },
    ],
  },
  {
    id: "no",
    message:
      "Water quality is one of the most important factors in a healthy ecosystem. Clean water supports a diversity of plants and wildlife. Though it may seem unrelated at first, our actions on land affect the quality of our water.",

    trigger: "cont4",
  },
  {
    id: "ov",
    message:
      "Water quality parameters include a wide range of chemical, physical and biological properties, with six principal indicators: dissolved oxygen, turbidity, pH, bioindicators, nitrate chemicals, and water temperature.",
    trigger: "cont4",
  },
  {
    id: "adcat2",
    message:
      "Something that can help you better understand water pollution: https://en.wikipedia.org/wiki/Water_pollution",
    trigger: "qns",
  },
];

const ThemedExample = () => (
  <CenterAlign>
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} />
    </ThemeProvider>
  </CenterAlign>
);

export default ThemedExample;
