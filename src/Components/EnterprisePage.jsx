import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import Navbar from "./Navbar/Navbar";

import Footer from "./Footer/Footer";
import { BsStopFill } from "react-icons/bs";

const EnterprisePage = () => {
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

      <Stack mt="4rem" ml="-22rem">
        <VStack>
          <List textAlign="left">
            {/* Mentimeter Enterprise */}
            <Box>
              <Heading
                as="h2"
                size="2xl"
                noOfLines={[2, 3, 4, 5, 6]}
                fontFamily="body"
                fontWeight="semibold"
                color="rgb(16,24,52)"
              >
                <Text>Mentimeter Enterprise</Text>
              </Heading>
            </Box>

            <Box
              color="rgba(16, 24, 52, 0.75)"
              fontWeight="semibold"
              fontSize="22px"
              mt="0.8rem"
            >
              <Text>
                Perfect for 10+ users. Get in touch and improve engagement
                levels today.
              </Text>
            </Box>

            <Box mt="2rem">
              <List textAlign="left" spacing="1.5rem" fontSize="1.1rem">
                <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
                  <ListIcon as={BsStopFill} color="green" />
                  Increased enterprise-level security and control.
                </ListItem>
                <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
                  <ListIcon as={BsStopFill} color="green" />
                  Premium support from dedicated Mentimeter experts.
                </ListItem>
                <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
                  <ListIcon as={BsStopFill} color="green" />
                  Simple team management with oversights of Mentimeter usage.
                </ListItem>
                <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
                  <ListIcon as={BsStopFill} color="green" />
                  Consolidated billing and scaling discounts.
                </ListItem>
              </List>
            </Box>
          </List>
        </VStack>
      </Stack>

      <Footer />
    </div>
  );
};

export default EnterprisePage;
