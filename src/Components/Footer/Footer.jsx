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
                <Box mt="-8rem">
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
              <Box mt="8rem" ml="5rem">
                <svg
                  width="25%"
                  height="25%"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 250 256.26"
                >
                  <title>KHeart illustration</title>
                  <path
                    fill="#196CFF"
                    d="M219.14,189.84a23.5,23.5,0,0,1,0,33.21L205.58,236.6,201.16,241l-11.07,11.07H24c0-.48,0-1,0-1.44a23.47,23.47,0,0,1,40.09-16.6,23,23,0,0,1-5.41-8.43A23.49,23.49,0,0,1,97.3,200.84a23.48,23.48,0,0,1,33.2-33.22l-33.2-33.2L64.08,101.2A23.48,23.48,0,1,1,97.3,68l33.2,33.2,16.61,16.62,2.83,2.83,38.25,38.25Z"
                  ></path>
                  <path
                    fill="#101834"
                    d="M210.07,88.07a23.51,23.51,0,0,1,0,33.2,84.32,84.32,0,0,0-21.88,37.63l-38.25-38.25a84.38,84.38,0,0,1,15.44-21.12l11.47-11.46a23.48,23.48,0,0,1,33.22,0Z"
                  ></path>
                  <path
                    fill="#FF403D"
                    d="M194.06,24.5a23.46,23.46,0,0,1-6.87,16.6l-16.6,16.6L147.11,81.19,107,41.1a23.49,23.49,0,1,1,40.09-16.6,23.48,23.48,0,1,1,46.95,0Z"
                  ></path>
                  <path
                    fill="#000000"
                    d="M24.67,256.26H24v-4.17h0A23.62,23.62,0,0,0,24.67,256.26Z"
                  ></path>
                  <path
                    fill="#000000"
                    d="M226,252.09H24a23.62,23.62,0,0,0,.64,4.17H250v-4.17Z"
                  ></path>
                  <rect
                    fill="#000000"
                    y="252.09"
                    width="23.99"
                    height="4.17"
                  ></rect>
                </svg>
              </Box>
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
