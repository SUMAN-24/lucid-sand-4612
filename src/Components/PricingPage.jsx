import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Plan from "./Plan";

const PricingPage = () => {
  return (
    <div>
      <Navbar />

      <Stack mt="4rem">
        <VStack>
          {/* Give Everyone A Voice */}
          <Heading
            as="h2"
            size="xl"
            noOfLines={[2, 3, 4, 5, 6]}
            fontFamily="sans-serif"
            fontWeight="semibold"
            color="rgb(16,24,52)"
            textAlign="center"
          >
            <Text>Give everyone a voice</Text>
            <Text>with the plan that’s right for you</Text>
          </Heading>

          <Box
            color="rgba(16, 24, 52, 0.75)"
            fontWeight="semibold"
            fontSize="22px"
          >
            <Text>
              Are you a teacher or a student? Take a look at our
              <Link color="blue" to="/">
                prices for Education
              </Link>
            </Text>
          </Box>
        </VStack>
      </Stack>

      <Plan />
    </div>
  );
};

export default PricingPage;
