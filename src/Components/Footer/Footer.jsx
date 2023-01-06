import {
  Box,
  Divider,
  Heading,
  HStack,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../Navbar/Logo";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsGlobe,
} from "react-icons/bs";
import KheartSvg from "./KheartSvg";

const Footer = () => {
  return (
    <Stack pt="3rem" height="35rem" width="100%">
      <VStack backgroundColor="rgb(236,237,239)" height="35rem">
        <HStack backgroundColor="rgb(236,237,239)" height="35rem">
          <Box>
            <Logo mt="-13rem" ml="7rem" />
          </Box>
          <Box>
            <HStack>
              <VStack pl="2rem">
                <Box mt="-12rem">
                  <Heading as="h3" fontSize="lg">
                    Features
                  </Heading>
                  <Divider
                    width="6rem"
                    fontWeight="bold"
                    fontFamily="body"
                    borderColor="rgb(16,24,52)"
                    borderWidth="1px"
                  />
                </Box>
                <Box pl="2rem">
                  <List textAlign="left">
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Overview
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Live Polling
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Word Cloud
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Quiz
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        {" "}
                        Q&A
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Survey
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Presentations
                      </Text>
                    </ListItem>
                  </List>
                </Box>
              </VStack>

              <VStack pl="3rem">
                <Box mt="-8.5rem">
                  <Heading as="h3" fontSize="lg">
                    Resources
                  </Heading>
                  <Divider
                    width="6rem"
                    fontWeight="bold"
                    fontFamily="body"
                    borderColor="rgb(16,24,52)"
                    borderWidth="1px"
                  />
                </Box>
                <Box pl="1.5rem">
                  <List textAlign="left">
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Blog
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Howto
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Solutions
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Templates
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Academy
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Webinars
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Comparison
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Stories
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Integrations
                      </Text>
                    </ListItem>
                  </List>
                </Box>
              </VStack>

              <VStack pl="2rem">
                <Box mt="-12.7rem">
                  <Heading as="h3" fontSize="lg">
                    Details
                  </Heading>
                  <Divider
                    width="6rem"
                    fontWeight="bold"
                    fontFamily="body"
                    borderColor="rgb(16,24,52)"
                    borderWidth="1px"
                  />
                </Box>
                <Box pl="1.5rem">
                  <List textAlign="left" ml="1.5rem">
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Legal
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Policies
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Accessibility
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Help Center
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Requirements
                      </Text>
                    </ListItem>
                  </List>
                </Box>
              </VStack>

              <VStack pl="3rem">
                <Box mt="-10rem">
                  <Heading as="h3" fontSize="lg">
                    About us
                  </Heading>
                  <Divider
                    width="6rem"
                    fontWeight="bold"
                    fontFamily="body"
                    borderColor="rgb(16,24,52)"
                    borderWidth="1px"
                  />
                </Box>
                <Box pl="0.8rem">
                  <List textAlign="left">
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Press info
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        The Team
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Jobs
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Culture
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Benefits
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text
                        fontWeight="semibold"
                        fontSize="1.1rem"
                        color="gray.45"
                      >
                        Contact us
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Climate
                      </Text>
                    </ListItem>
                    <ListItem _hover={{ color: "gray", cursor: "pointer" }}>
                      <Text fontWeight="semibold" fontSize="lg" color="gray.45">
                        Investors
                      </Text>
                    </ListItem>
                  </List>
                </Box>
              </VStack>
            </HStack>
          </Box>

          <Box>
            <VStack>
              {/* Kheart svg image */}
              <Box mt="8rem" ml="5rem">
               <KheartSvg/>
              </Box>

              {/* medialinks */}
              <Box>
                <HStack gap="0.5rem" mt="0.5rem" ml="-6rem">
                  <Box _hover={{ color: "gray", cursor: "pointer" }}>
                    <BsFacebook size="1.6rem" />
                  </Box>
                  <Box _hover={{ color: "gray", cursor: "pointer" }}>
                    <BsLinkedin size="1.6rem" />
                  </Box>
                  <Box _hover={{ color: "gray", cursor: "pointer" }}>
                    <BsTwitter size="1.6rem" />
                  </Box>
                  <Box _hover={{ color: "gray", cursor: "pointer" }}>
                    <BsInstagram size="1.6rem" />
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </HStack>

      {/* divider */}
        <Box>
          <Divider
            mt="-7rem"
            width="70rem"
            fontWeight="bold"
            fontFamily="sans-serif"
            borderColor="rgb(16,24,52)"
            borderWidth="1px"
          />
        </Box>

      {/* language selection */}
        <HStack>
          <Box mt="-11rem" ml="-35rem">
            <BsGlobe size="1.4rem" />
          </Box>
          <Box>
            <Text mt="-6.2rem" fontWeight="semibold">
              Choose your language:
            </Text>
          </Box>
          <Box>
            <Text
              mt="-6.2rem"
              ml="2rem"
              fontWeight="semibold"
              _hover={{ color: "gray", cursor: "pointer" }}
            >
              English
            </Text>
          </Box>
          <Box>
            <Text
              mt="-6.2rem"
              ml="2rem"
              fontWeight="semibold"
              _hover={{ color: "gray", cursor: "pointer" }}
            >
              Portuguese (Brazil)
            </Text>
          </Box>
          <Box>
            <Text
              mt="-6.2rem"
              ml="2rem"
              fontWeight="semibold"
              _hover={{ color: "gray", cursor: "pointer" }}
            >
              Spanish
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Footer;
