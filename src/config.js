import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";


const config = {
  initialMessages: [
    createChatBotMessage("Welcome, Alexander. What can I help you with today?", {
      widget: "learningOptions",
    })
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />
    },
    {
      widgetName: "portfolioLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Projects",
            url: "https://zandermate-portfolio.netlify.app/#projects",
            id: 1,
          },
          {
            text: "About Me",
            url: "https://zandermate-portfolio.netlify.app/#about",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "socialMediaLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/alexander-griep/",
            id: 1
          },
          {
            text: "Twitter",
            url: "https://twitter.com/CodeGriep",
            id: 2
          },
          {
            text: "GitHub",
            url: "https://github.com/ZanderMate",
            id: 3
          }
        ]
      }
    }
  ],
};

export default config;