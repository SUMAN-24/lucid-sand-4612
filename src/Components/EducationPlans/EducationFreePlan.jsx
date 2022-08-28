import {
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EducationFreePlan = ({ display }) => {
  const navigate = useNavigate();

  return (
    <VStack>
      <List textAlign="left">
        <Box>
          <Heading as="h3" fontWeight="semibold" fontSize="2xl">
            Free
          </Heading>
        </Box>

        <Box mt="0.6rem">
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            Try out Mentimeter to
          </Text>
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            engage your audience.
          </Text>
        </Box>

        <Box mt="1.5rem">
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="5xl"
            color="rgb(16,24,52)"
          >
            $0
          </Heading>
          <Text
            mt="0.5rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="sm"
            fontWeight="semibold"
          >
            No credit card needed
          </Text>
        </Box>

        <Box>
          <Button
            mt="2.5rem"
            width="13rem"
            height="3rem"
            backgroundColor="rgb(219,220,225)"
            _hover={{ backgroundColor: "gray" }}
            onClick={() => {
              navigate(`/signup?referral=${display}`);
            }}
          >
            <Text fontFamily="sans-serif" fontWeight="bold">
              Get Started
            </Text>
          </Button>
        </Box>

        <Box mt="1rem">
          <List textAlign="left">
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Unlimited audience
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Unlimited presentations
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Up to 2 question slides
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Up to 5 quiz slides
            </ListItem>
          </List>
        </Box>
      </List>
    </VStack>
  );
};

export default EducationFreePlan;
