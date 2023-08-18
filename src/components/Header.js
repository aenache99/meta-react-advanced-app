import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: alexandru.enache@ieee.org",
  },
  {
    icon: faGithub,
    url: "https://github.com/aenache99",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/alexandru-gabriel-enache-56a282115/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack spacing={8}
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          {socials.map((social, index) => (
                <a href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}



          </nav>
          <nav>
            <HStack spacing={8}>
                            {/* Add links to Projects and Contact me section */}

            <a
                key="projects"
                href="#projects-section"
                onClick={handleClick("projects")}
              >
              
              Projects
              
              </a>
            </HStack>

            <HStack spacing={8}>{/* Add links to Projects and Contact me section */}

            <a
                key="contact-me"
                href="#contactme-section"
                onClick={handleClick("contact-me")}
              >
                Contact Me
                </a>
            </HStack>

          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;