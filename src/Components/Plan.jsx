import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Plan = () => {
  return (
    <Stack>
      <VStack>
        <Box>
          <Heading as="h3" fontWeight="semibold" fontSize="2xl">
            Free
          </Heading>
        </Box>
        <Box>
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            For anyone trying out
          </Text>
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            Mentimeter.
          </Text>
        </Box>
        <Box>
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="6xl"
            color="rgb(16,24,52)"
          >
            $0
          </Heading>
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
  );
};

export default Plan;
