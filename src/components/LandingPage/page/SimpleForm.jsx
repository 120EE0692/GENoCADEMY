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
      { value: 2, label: "Mentor/Tutor", trigger: "cat2" },
     
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
      { value: 1, label: "Student Benefits", trigger: "preteencat1" },
      { value: 2, label: "How to update my Profile?", trigger: "preteencat2" },
    ],
  },
  {
    id: "preteencat1",
    message: "I am so happy that you are intrested in us.",
    trigger: "ans1",
  },
  {
    id: "ans1",
    message:
      "Here's the spectrum of benefits you get. GENoCADEMY is an online mentorship platform that helps students be more focussed and mentors to contribute towards community education. ",
    trigger: "cont3",
  },
  {
    id: "preteencat2",
    message:
      "Sure, I will guide you through that! All you ned to do is Sign in with your existing account. Go to 'MY PROFILE', update the information, SAVE, and it;s done. WOHOO!! ;)",
    trigger: "cont3",
  },

  {
    id: "cat2",
    message: "Good to see you here, Sensei! How can I help you?",
    trigger: "teencat",
  },
  {
    id: "teencat",
    options: [
      { value: 1, label: "How to donate?", trigger: "teencat1" },
      { value: 2, label: "About class", trigger: "teencat2" },
    ],
  },
  {
    id: "teencat1",
    message: "Go on the profile that you want to donate and you get a button that reads 'DONATE'. Click and proceed to pay.",
    trigger: "period",
  },
  {
    id: "period",
    options: [
      { value: 1, label: "Demo payment", trigger: "period1" },
      { value: 2, label: "About Donation", trigger: "period2" },
    ],
  },
  {
    id: "period1",
    message:
      "Here's a link that might help: https://razorpay.com/payment-links/ ",
    trigger: "cont2",
  },
  {
    id: "period2",
    message: "Donation is just a way of giving financial assisstance for all the educational donation a mentor does through GENoCADEMY.",
    trigger: "cont2",
  },
  {
    id: "teencat2",
    message: "Please tell me where you are facing an issue",
    trigger: "si",
  },
  {
    id: "si",
    options: [
      {
        value: 1,
        label: "How to create a class?",
        trigger: "si1",
      },
      { value: 2, label: "How to edit the created classes?", trigger: "si2" },
    ],
  },
  {
    id: "si1",
    message:
      "You need to click on the 'Creat a Class' button, add all the information required to create a class, click on 'CREATE', and Voila!",
    trigger: "cont2",
  },
  {
    id: "si2",
    message:
      "Click on the class you have created. You will get an option to edit. Change all that yopu need and save.",
    trigger: "cont2",
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
