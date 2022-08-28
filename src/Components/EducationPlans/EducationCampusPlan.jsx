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
import { useNavigate } from "react-router-dom";

const EducationCampusPlan = () => {
  const navigate = useNavigate();

  return (
    <VStack>
      <List textAlign="left">
        <HStack gap="2rem">
          <Box>
            <Heading as="h3" fontWeight="semibold" fontSize="2xl">
              Campus
            </Heading>
          </Box>
        </HStack>

        <Box mt="0.6rem">
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            An Enterprise solution
          </Text>
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            tailored to your educational
          </Text>
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            organization.
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
            mt="3.7rem"
            width="13rem"
            height="3rem"
            backgroundColor="rgb(219,220,225)"
            _hover={{ backgroundColor: "gray" }}
            onClick={() => {
              navigate(`/enterprise`);
            }}
          >
            <Text fontFamily="sans-serif" fontWeight="bold">
              Learn More
            </Text>
          </Button>
        </Box>

        <Box mt="1rem">
          <List textAlign="left">
            <ListItem color="rgb(16,24,52)" fontWeight="semibold">
              All Pro features, plus
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Single Sign-On
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Shared templates
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Success manager
            </ListItem>
          </List>
        </Box>
      </List>
    </VStack>
  );
};

export default EducationCampusPlan;
