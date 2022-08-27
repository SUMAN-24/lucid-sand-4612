import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsCheck2 } from "react-icons/bs";

const EnterprisePlan = () => {
  return (
    <VStack>
      <List textAlign="left">
        <HStack gap="2rem">
          <Box>
            <Heading as="h3" fontWeight="semibold" fontSize="2xl">
              Enterprise
            </Heading>
          </Box>
        </HStack>

        <Box mt="0.6rem">
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            For using Mentimeter in your
          </Text>
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            team or organization.
          </Text>
        </Box>

        <Box mt="1.5rem">
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="4xl"
            color="rgb(16,24,52)"
          >
            Custom
          </Heading>
        </Box>

        <Box>
          <Button
            mt="5.2rem"
            width="13rem"
            height="3rem"
            backgroundColor="rgb(219,220,225)"
            _hover={{ backgroundColor: "gray" }}
          >
            <Text fontFamily="sans-serif" fontWeight="bold">
              Learn More
            </Text>
          </Button>
        </Box>

        <Box mt="1rem">
          <List textAlign="left">
            <ListItem color="rgb(16,24,52)" fontWeight="semibold">
              All Basic features, plus
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Create a team
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Collaborate with others
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Add your own branding
            </ListItem>
          </List>
        </Box>
      </List>
    </VStack>
  );
};

export default EnterprisePlan;
