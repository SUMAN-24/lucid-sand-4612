import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Signup from "./Navbar/Signup";
import image1 from "../Media/images/teresa-homepage.png";
import image2 from "../Media/images/menti-pattern.png";
import image3 from "../Media/images/Dynamic_Word.png";
import image4 from "../Media/images/Live.png";
import image5 from "../Media/images/Entertaining.png";
import image6 from "../Media/images/Informative.png";
import image7 from "../Media/images/hello.png";
import image8 from "../Media/images/templates.svg";
import image9 from "../Media/images/webinars.svg";
import image10 from "../Media/images/mentimeter_academy.svg";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomePage = () => {
  const text = "homepage";

  return (
    <div>
      {/* navbar */}
      <Navbar
        display={text}
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgb(255,255,255)",
          zIndex: 1,
        }}
      />

      {/* start of homepage */}
      <Stack mt="4rem">
        <VStack>
          {/* Engaze your Audience */}
          <Heading
            as="h2"
            size="3xl"
            noOfLines={[2, 3, 4, 5, 6]}
            fontFamily="sans-serif"
            fontWeight="semibold"
            color="rgb(16,24,52)"
            textAlign="center"
          >
            <Text>Engage your audience &</Text>
            <Text> eliminate awkward silences</Text>
          </Heading>

          <Box color="rgba(16, 24, 52, 0.75)" fontSize="22px">
            <Text>
              Our easy-to-build presentations, interactive Polls, Quizzes, and
            </Text>
            <Text>Word Clouds mean more participation and less stress</Text>
          </Box>

          <Box pt="2rem">
            <Signup
              width="13rem"
              height="3.5rem"
              fontSize="xl"
              display="homepage"
              fontFamily="sans-serif"
              placeholder="Sign up for Free"
            />
          </Box>

          <Box>
            <Text
              color="rgba(16, 24, 52, 0.75)"
              fontSize="large"
              fontWeight="semibold"
            >
              No credit card needed
            </Text>
          </Box>
        </VStack>
      </Stack>

      <Stack mt="3rem">
        <Box align="center" position="relative" w="100%">
          <Image w="60%" src={image7} alt="hello" />
        </Box>

        <Box
          position="absolute"
          align="center"
          w="100%"
          pt="12rem"
          zIndex="410"
        >
          <Button
            width="10rem"
            height="3rem"
            fontSize="1rem"
            fontFamily="sans-serif"
            colorScheme="messenger"
            rightIcon={<BsFillPlayFill color="white" size="1.5rem" />}
          >
            Watch video
          </Button>
        </Box>
      </Stack>

      <Stack mt="2rem">
        <VStack>
          <Box mt="3.6rem">
            <Heading
              fontFamily="sans-serif"
              fontSize="5xl"
              fontWeight="semibold"
              color="rgb(16,24,52)"
            >
              <Text>Millions of voices have</Text>
              <Text> already been heard</Text>
            </Heading>
          </Box>

          <Box pt="1.5rem">
            <HStack gap="5rem">
              <VStack>
                <Box>
                  <Heading
                    fontWeight="semibold"
                    fontFamily="body"
                    fontSize="6xl"
                    color="rgb(16,24,52)"
                    ml="12"
                  >
                    280 M
                  </Heading>
                  <Divider
                    width="18rem"
                    fontWeight="bold"
                    fontFamily="body"
                    borderColor="rgb(16,24,52)"
                    borderWidth="1.2px"
                  />
                </Box>
                <Box pt="1rem">
                  <Text fontSize="1.5rem" fontWeight="semibold" ml="-10">
                    Voters
                  </Text>
                </Box>
              </VStack>

              <VStack>
                <Box>
                  <Heading
                    fontWeight="semibold"
                    fontFamily="body"
                    fontSize="6xl"
                    color="rgb(16,24,52)"
                    ml="20"
                  >
                    14 M
                  </Heading>
                  <Divider
                    width="18rem"
                    fontWeight="bold"
                    fontFamily="body"
                    borderColor="rgb(16,24,52)"
                    borderWidth="1.2px"
                  />
                </Box>
                <Box pt="1rem">
                  <Text fontSize="1.5rem" fontWeight="semibold">
                    Presenters
                  </Text>
                </Box>
              </VStack>

              <VStack>
                <Box>
                  <Heading
                    fontWeight="semibold"
                    fontFamily="body"
                    fontSize="6xl"
                    ml="20"
                  >
                    220+
                  </Heading>
                  <Divider
                    width="18rem"
                    fontWeight="bold"
                    fontFamily="body"
                    borderColor="rgb(16,24,52)"
                    borderWidth="1.2px"
                  />
                </Box>
                <Box pt="1rem">
                  <Text fontSize="1.5rem" fontWeight="semibold">
                    Countries & territories
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </Box>

          <Box pt="5rem" display="flex" mt="7rem" gap="6rem">
            <Box ml="12rem" width="30%">
              <Image
                width="100%"
                height="100%"
                src={image1}
                alt="teresa-delfin"
              />
            </Box>
            <Box pr="6rem" pt="-2rem">
              <Heading
                fontFamily="sans-serif"
                fontSize="3xl"
                fontWeight="semibold"
                color="rgb(16,24,52)"
                // noOfLines={[4, 5, 6]}
              >
                <Text>"Mentimeter allows everyone to</Text>
                <Text>ask questions, to get</Text>
                <Text>clarification or a clearer</Text>
                <Text>understanding on subjects</Text>
                <Text>resulting in a more fulfilling</Text>
                <Text>learning experience."</Text>
              </Heading>
              <br />
              <Text
                fontSize="xl"
                fontWeight="semibold"
                color="rgb(25, 108, 255)"
              >
                Teresa Delfin, California State Polytechnic University
              </Text>
              <br />
              <br />
              <Button
                size="md"
                height="45px"
                width="200px"
                border="2px"
                backgroundColor="white"
                borderColor="rgb(25, 108, 255)"
                color="rgb(25, 108, 255)"
                _hover={{ bgColor: "rgb(25, 108, 255)", color: "white" }}
                fontFamily="sans-serif"
                ml="8rem"
              >
                Explore More Stories
              </Button>
            </Box>
          </Box>
        </VStack>
      </Stack>

      {/* A feature for every need */}
      <Stack mt="2rem" height="34rem">
        <VStack backgroundColor="rgb(236,237,239)" height="34rem">
          <Box mt="3rem">
            <Heading
              as="h2"
              color="rgb(16,24,52)"
              fontWeight="semibold"
              fontSize="3rem"
            >
              A feature for every need
            </Heading>
          </Box>

          <Box pt="1.8rem">
            <HStack gap="3rem">
              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box align="center">
                    <Image height="60%" width="60%" src={image3} alt="menti" />
                  </Box>

                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text>Dynamic Word</Text>
                      <Text> Clouds</Text>
                    </Heading>
                  </Box>

                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>A vibrant way to visualize</Text>
                    <Text>your audience's ideas</Text>
                    <Text color="rgb(25,108,255)">Learn more</Text>
                  </Box>
                </VStack>
              </Link>

              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box pt="1rem" align="center">
                    <Image height="60%" width="60%" src={image4} alt="menti" />
                  </Box>
                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text>Live & Instant</Text>
                      <Text>Polling</Text>
                    </Heading>
                  </Box>
                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Let your audience answer</Text>
                    <Text>any question you may have</Text>
                    <Text>for them</Text>
                    <Text color="rgb(25,108,255)">Learn more</Text>
                  </Box>
                </VStack>
              </Link>

              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box align="center">
                    <Image height="60%" width="60%" src={image5} alt="menti" />
                  </Box>
                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text>Entertaining</Text>
                      <Text>Quizzes</Text>
                    </Heading>
                  </Box>
                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Run factual, fun, or</Text>
                    <Text>icebreaker quizzes</Text>
                    <Text color="rgb(25,108,255)">Learn more</Text>
                  </Box>
                </VStack>
              </Link>

              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box mt="-1.5rem" align="center">
                    <Image height="60%" width="60%" src={image6} alt="menti" />
                  </Box>
                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      Informative Q&As
                    </Heading>
                  </Box>
                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Let your audience ask</Text>
                    <Text>questions without the fuss</Text>
                    <Text color="rgb(25,108,255)">Learn more</Text>
                  </Box>
                </VStack>
              </Link>
            </HStack>
          </Box>

          {/* <Box pt="2rem">
            <Button
              size="md"
              height="45px"
              width="170px"
              border="2px"
              backgroundColor="rgb(236,237,239)"
              borderColor="rgb(25, 108, 255)"
              color="rgb(25, 108, 255)"
              _hover={{ bgColor: "rgb(25, 108, 255)", color: "white" }}
              fontFamily="sans-serif"
            >
              Explore Features
            </Button>
          </Box> */}
        </VStack>
      </Stack>

      {/* Want to become a better presenter? */}
      <Stack mt="1.2rem" height="41rem">
        <VStack height="41rem">
          <Box mt="3rem" align="center">
            <Heading
              as="h2"
              color="rgb(16,24,52)"
              fontWeight="semibold"
              fontSize="3rem"
            >
              Want to become a better
            </Heading>

            <Heading
              as="h2"
              color="rgb(16,24,52)"
              fontWeight="semibold"
              fontSize="3rem"
            >
              presenter?
            </Heading>
          </Box>

          <Box pt="1.8rem">
            <HStack gap="3rem">
              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box align="center">
                    <Image height="100%" width="100%" src={image8} alt="menti" />
                  </Box>

                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text>Templates</Text>
                    </Heading>
                  </Box>

                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Predesigned templates designed to be</Text>
                    <Text>used immediately.</Text>
                    <Text color="rgb(25,108,255)">Explore templates</Text>
                  </Box>
                </VStack>
              </Link>

              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box align="center">
                    <Image height="100%" width="100%" src={image9} alt="menti" />
                  </Box>
                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text>Webinars</Text>
                    </Heading>
                  </Box>
                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Join our expert-led webinars to learn</Text>
                    <Text>how to get the most out of Mentimeter.</Text>
                    <Text color="rgb(25,108,255)">Register now</Text>
                  </Box>
                </VStack>
              </Link>

              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box align="center">
                    <Image height="100%" width="100%" src={image10} alt="menti" />
                  </Box>
                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text>Mentimeter Academy</Text>
                    </Heading>
                  </Box>
                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Learn about the skill of presenting and</Text>
                    <Text>the art of presentation design.</Text>
                    <Text color="rgb(25,108,255)">Enrol today</Text>
                  </Box>
                </VStack>
              </Link>
            </HStack>
          </Box>

          {/* <Box pt="2rem">
            <Button
              size="md"
              height="45px"
              width="170px"
              border="2px"
              backgroundColor="rgb(236,237,239)"
              borderColor="rgb(25, 108, 255)"
              color="rgb(25, 108, 255)"
              _hover={{ bgColor: "rgb(25, 108, 255)", color: "white" }}
              fontFamily="sans-serif"
            >
              Explore Features
            </Button>
          </Box> */}
        </VStack>
      </Stack>

      <Stack mt="2rem" height="34rem">
        <VStack backgroundColor="rgb(236,237,239)" height="34rem">
          <Box mt="3rem">
            <Heading
              as="h2"
              color="rgb(16,24,52)"
              fontWeight="semibold"
              fontSize="3rem"
            >
              A feature for every need
            </Heading>
          </Box>

          <Box pt="1.8rem">
            <HStack gap="3rem">
              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box align="center">
                    <Image height="60%" width="60%" src={image3} alt="menti" />
                  </Box>

                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text>Dynamic Word</Text>
                      <Text> Clouds</Text>
                    </Heading>
                  </Box>

                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>A vibrant way to visualize</Text>
                    <Text>your audience's ideas</Text>
                    <Text color="rgb(25,108,255)">Learn more</Text>
                  </Box>
                </VStack>
              </Link>

              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box pt="1rem" align="center">
                    <Image height="60%" width="60%" src={image4} alt="menti" />
                  </Box>
                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text>Live & Instant</Text>
                      <Text>Polling</Text>
                    </Heading>
                  </Box>
                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Let your audience answer</Text>
                    <Text>any question you may have</Text>
                    <Text>for them</Text>
                    <Text color="rgb(25,108,255)">Learn more</Text>
                  </Box>
                </VStack>
              </Link>

              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box align="center">
                    <Image height="60%" width="60%" src={image5} alt="menti" />
                  </Box>
                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text>Entertaining</Text>
                      <Text>Quizzes</Text>
                    </Heading>
                  </Box>
                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Run factual, fun, or</Text>
                    <Text>icebreaker quizzes</Text>
                    <Text color="rgb(25,108,255)">Learn more</Text>
                  </Box>
                </VStack>
              </Link>

              <Link to="#">
                <VStack
                  _hover={{
                    transition: "all ease-in-out 650ms",
                    transform: "translateY(-0.68rem)",
                  }}
                >
                  <Box mt="-1.5rem" align="center">
                    <Image height="60%" width="60%" src={image6} alt="menti" />
                  </Box>
                  <Box pt="1rem">
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      Informative Q&As
                    </Heading>
                  </Box>
                  <Box
                    display="block"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    // noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Let your audience ask</Text>
                    <Text>questions without the fuss</Text>
                    <Text color="rgb(25,108,255)">Learn more</Text>
                  </Box>
                </VStack>
              </Link>
            </HStack>
          </Box>

          {/* <Box pt="2rem">
            <Button
              size="md"
              height="45px"
              width="170px"
              border="2px"
              backgroundColor="rgb(236,237,239)"
              borderColor="rgb(25, 108, 255)"
              color="rgb(25, 108, 255)"
              _hover={{ bgColor: "rgb(25, 108, 255)", color: "white" }}
              fontFamily="sans-serif"
            >
              Explore Features
            </Button>
          </Box> */}
        </VStack>
      </Stack>

      <Stack>
        <Box position="relative" m="auto" w="100%">
          <Image src={image2} />
        </Box>
        <Box
          position="absolute"
          textAlign="center"
          w="100%"
          color="white"
          fontSize="2.8rem"
          fontFamily="sans-serif"
          pt="1.5rem"
        >
          <Text>Impress with Interactive</Text>
          <Text>Presentations</Text>
          <Button
            backgroundColor="white"
            borderColor="rgb(25, 108, 255)"
            color="rgb(25, 108, 255)"
            _hover={{ bgColor: "rgb(193,193,193)" }}
            w="140px"
            h="48px"
            fontSize="1.2rem"
          >
            Get started
          </Button>
        </Box>
      </Stack>

      {/* footer */}
      <Stack mt="-3rem">
        <Box>
          <Footer />
        </Box>
      </Stack>
    </div>
  );
};

export default HomePage;
