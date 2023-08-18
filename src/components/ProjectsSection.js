import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Emotion Recognition Software",
    description:
      "A Multimodal Emotion Recognition tool built using Convolutional Neural Networks.",
    getImageSrc: () => require("../images/photo1.jpg")
  },
  {
    title: "Coursera Coursebuddy Chatbot with IBM Watson",
    description:
      "A fully integrated chatbot for Coursera users meant to help them in their learning journey.",
    getImageSrc: () => require("../images/photo2.jpg")
  },
  {
    title: "Little Lemon Android App",
    description:
      "A turnkey solution for the Little Lemon restaurant designed for Android Devices.",
    getImageSrc: () => require("../images/photo3.jpg")
  },
  {
    title: "Coursera Course Recommender System",
    description:
      "A Recommender system built using Machine Learning models in order to help users to find more suited courses.",
    getImageSrc: () => require("../images/photo4.jpg")
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;