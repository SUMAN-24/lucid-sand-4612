import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Signup from "./Navbar/Signup";

const HomePage = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

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
            color="#101834"
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
            <Signup width="8rem" height="3.5rem" fontSize="2xl" />
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
        </VStack>
      </Stack>
    </div>
  );
};

export default HomePage;
