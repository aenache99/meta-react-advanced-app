import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import alex from '../images/alex.jpg';

const greeting = "Hello, I am Alexandru-Gabriel!";
const bio1 = "AI Researcher interested in Fullstack Development!";
const bio2 = "Here you can see my project portofolio.";
const bio3 = "";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#038387"
  >
  <VStack spacing={16}>
      <VStack spacing={4}>
      <Avatar size="xl" name="Alex" src={alex} />
      <Heading as="h6" size="sm" color="white">
        {greeting}
        </Heading>
      </VStack>
        <VStack spacing={6}>
      <Heading as="h1" size="2xl" color="white">
        {bio1}
      </Heading>
      <Heading as="h1" size="1xl" color="white">
        {bio2}
      </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;