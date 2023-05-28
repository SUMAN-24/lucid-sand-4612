import {
  Box,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import FreePlan from "./FreePlan";
import BasicPlan from "./BasicPlan";
import ProPlan from "./ProPlan";
import EnterprisePlan from "./EnterprisePlan";
import Footer from "./Footer/Footer";

const PricingPage = () => {
  const text = "plans";

  return (
    <div>
      <Navbar
        display={text}
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgb(255,255,255",
          zIndex: 1,
        }}
      />

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
            <Text display="flex" gap="0.3rem">
              Are you a teacher or a student? Take a look at our
              <Link color="blue" to="/plans/education">
                <Text color="blue" textDecoration="underline">
                  {" "}
                  prices for Education
                </Text>
              </Link>
            </Text>
          </Box>
        </VStack>
      </Stack>

      <Stack alignItems="center">
        <HStack mt="2rem" gap="1.5rem">
          <Box>
            <FreePlan display={text} />
          </Box>
          <Box>
            <Divider
              orientation="vertical"
              height="24rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="rgb(16,24,52)"
              borderWidth="1px"
            />
          </Box>
          <Box>
            <BasicPlan />
          </Box>
          <Box>
            <Divider
              orientation="vertical"
              height="24rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="rgb(16,24,52)"
              borderWidth="1px"
            />
          </Box>
          <Box>
            <ProPlan />
          </Box>
          <Box>
            <Divider
              orientation="vertical"
              height="24rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="rgb(16,24,52)"
              borderWidth="1px"
            />
          </Box>
          <Box>
            <EnterprisePlan />
          </Box>
        </HStack>
      </Stack>
      <Footer />
    </div>
  );
};

export default PricingPage;
