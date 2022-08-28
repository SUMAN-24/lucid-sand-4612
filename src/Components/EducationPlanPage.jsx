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
import Footer from "./Footer/Footer";
import EducationBasicPlan from "./EducationPlans/EducationBasicPlan";
import EducationFreePlan from "./EducationPlans/EducationFreePlan";
import EducationProPlan from "./EducationPlans/EducationProPlan";
import EducationCampusPlan from "./EducationPlans/EducationCampusPlan";

const EducationPlanPage = () => {
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
            <Text>Boost engagement in the classroom</Text>
            <Text>with the plan that’s right for you</Text>
          </Heading>

          <Box
            color="rgba(16, 24, 52, 0.75)"
            fontWeight="semibold"
            fontSize="22px"
          >
            <Text display="flex" gap="0.3rem">
              Not a teacher or student? See Mentimeter
              <Link color="blue" to="/plans">
                <Text color="blue" textDecoration="underline">
                  {" "}
                  for Professionals
                </Text>
              </Link>
            </Text>
          </Box>
        </VStack>
      </Stack>

      <Stack alignItems="center">
        <HStack mt="2rem" gap="1.5rem">
          <Box>
            <EducationFreePlan display={text} />
          </Box>
          <Box>
            <Divider
              orientation="vertical"
              height="25rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="rgb(16,24,52)"
              borderWidth="1px"
            />
          </Box>
          <Box>
            <EducationBasicPlan />
          </Box>
          <Box>
            <Divider
              orientation="vertical"
              height="25rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="rgb(16,24,52)"
              borderWidth="1px"
            />
          </Box>
          <Box>
            <EducationProPlan />
          </Box>
          <Box>
            <Divider
              orientation="vertical"
              height="25rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="rgb(16,24,52)"
              borderWidth="1px"
            />
          </Box>
          <Box>
            <EducationCampusPlan />
          </Box>
        </HStack>
      </Stack>
      <Footer />
    </div>
  );
};

export default EducationPlanPage;
