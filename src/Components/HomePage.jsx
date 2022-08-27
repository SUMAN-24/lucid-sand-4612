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
          backgroundColor: "rgb(255,255,255",
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
              width="8rem"
              height="3.5rem"
              fontSize="2xl"
              display="homepage"
            />
          </Box>

          <Box>
            <Text
              color="rgba(16, 24, 52, 0.75)"
              fontSize="xs"
              fontWeight="semibold"
            >
              No credit card needed
            </Text>
          </Box>
        </VStack>
      </Stack>

      <Stack mt="2rem" height="42rem">
        <VStack backgroundColor="rgb(236,237,239)" height="42rem">
          <Box mt="3rem">
            <Heading as="h2" color="blue" fontWeight="semibold" fontSize="3rem">
              What is Mentimeter?
            </Heading>
          </Box>

          <Box pt="4rem">
            <HStack gap="3rem">
              <VStack>
                <Box>
                  <Image
                    height="100%"
                    width="100%"
                    src="https://www.mentimeter.com/_next/static/media/prepare.589e36de.svg"
                    alt="menti"
                  />
                </Box>
                <Box pt="1rem">
                  <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                    Prepare
                  </Heading>
                </Box>
                <Box display="block">
                  <Text
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Build interactive presentations with the</Text>
                    <Text> easy-to-use online editor. Add questions,</Text>
                    <Text> polls, quizzes, slides, images, gifs and more</Text>
                    <Text> to your presentation to create fun and</Text>
                    <Text> engaging presentations.</Text>
                  </Text>
                </Box>
              </VStack>

              <VStack>
                <Box>
                  <Image
                    height="100%"
                    width="100%"
                    src="https://www.mentimeter.com/_next/static/media/engage.ba9959f7.svg"
                    alt="menti"
                  />
                </Box>
                <Box pt="1rem">
                  <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                    Engaze
                  </Heading>
                </Box>
                <Box display="block">
                  <Text
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Your audience uses their smartphones to</Text>
                    <Text> connect to the presentation where they</Text>
                    <Text> can answer questions. Visualize their</Text>
                    <Text> responses in real-time to create a fun and</Text>
                    <Text> interactive experience.</Text>
                  </Text>
                </Box>
              </VStack>

              <VStack>
                <Box mt="-1.5rem">
                  <Image
                    height="100%"
                    width="100%"
                    src="https://www.mentimeter.com/_next/static/media/followup.14994f30.svg"
                    alt="menti"
                  />
                </Box>
                <Box pt="1rem">
                  <Heading as="h3" fontSize="2xl" fontWeight="semibold">
                    Follow-up
                  </Heading>
                </Box>
                <Box display="block">
                  <Text
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="semibold"
                    color="rgb(86,92,111)"
                    noOfLines={[5, 6, 7, 8]}
                  >
                    <Text>Once your Mentimeter presentation is over,</Text>
                    <Text> share and export your results for further</Text>
                    <Text> analysis and even compare data over time</Text>
                    <Text> to measure the progress of your audience.'</Text>
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </Box>

          <Box pt="2rem">
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
          </Box>
        </VStack>
      </Stack>

      <Stack>
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
                  <Text fontSize="xl" fontWeight="semibold">
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
                  <Text fontSize="xl" fontWeight="semibold">
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
                  <Text fontSize="xl" fontWeight="semibold">
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
                src="https://www.mentimeter.com/_next/static/media/andrew-hollo.3f3b1387.png"
                alt="andrew-hollo"
              />
            </Box>
            <Box pr="6rem" pt="-2rem">
              <Heading
                fontFamily="sans-serif"
                fontSize="3xl"
                fontWeight="semibold"
                color="rgb(16,24,52)"
                noOfLines={[4, 5, 6]}
              >
                <Text>"I can pose a question easily and</Text>
                <Text> within a minute or two,have </Text>
                <Text> aggregated responses from every</Text>
                <Text> participant."</Text>
              </Heading>
              <br />
              <Text
                fontSize="xl"
                fontWeight="semibold"
                color="rgb(25, 108, 255)"
              >
                Andrew Hollo, Workwell Consulting
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
              >
                Explore More Stories
              </Button>
            </Box>
          </Box>

          <Footer />
        </VStack>
      </Stack>
    </div>
  );
};

export default HomePage;
