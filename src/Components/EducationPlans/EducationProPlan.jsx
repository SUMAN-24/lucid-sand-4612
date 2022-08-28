import React from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { BsCheck2 } from "react-icons/bs";

const EducationProPlan = () => {
  return (
    <VStack>
      <List textAlign="left">
        <HStack gap="2rem">
          <Box>
            <Heading as="h3" fontWeight="semibold" fontSize="2xl">
              Pro
            </Heading>
          </Box>
          <Box textAlign="center">
            <Badge
              variant="solid"
              colorScheme="messenger"
              color="white"
              height="28px"
              width="8rem"
              borderRadius="2rem"
              pt="0.3rem"
            >
              Recommended
            </Badge>
          </Box>
        </HStack>

        <Box mt="0.6rem">
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            All the power to customize
          </Text>
          <Text
            color="rgba(16, 24, 52, 0.75)"
            fontWeight="semibold"
            display="flex"
            gap="0.2rem"
          >
            your presentations.
          </Text>
        </Box>

        <Box mt="1.5rem">
          <Text as="s" mt="0.5rem" color="gray" fontSize="sm" fontWeight="bold">
            $24.99/month{" "}
            <Badge
              variant="subtle"
              backgroundColor="rgb(229,247,241)"
              color="green"
              height="23px"
              textAlign="center"
              borderRadius="4px"
              width="6.8rem"
              padding="0.1rem"
              ml="0.5rem"
            >
              40% DISCOUNT
            </Badge>
          </Text>
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="5xl"
            color="rgb(16,24,52)"
            mt="-0.9rem"
          >
            $14
            <Text as="sup" fontSize="1.8rem">
              99<Text as="sub">/month</Text>
            </Text>
          </Heading>
          <Text
            mt="0.5rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="sm"
            fontWeight="semibold"
          >
            Billed Yearly
            <Box display="flex" gap="0.2rem">
              <Text>Price per </Text>

              <Tooltip
                width="12rem"
                height="5rem"
                hasArrow
                placement="top"
                label="The creator and host of an interactive Mentimeter presentation"
                bg="blackAlpha.900"
                color="white"
                textAlign="match-parent"
                pt="0.5rem"
                pl="0.7rem"
              >
                <Text
                  textDecorationLine="underline"
                  cursor="help"
                  fontWeight="bold"
                >
                  presenter{" "}
                </Text>
              </Tooltip>

              <Text>, excl. tax.</Text>
            </Box>
          </Text>
        </Box>

        <Box>
          <Button
            mt="1rem"
            width="13rem"
            height="3rem"
            colorScheme="messenger"
            _hover={{ backgroundColor: "blue" }}
          >
            <Text fontFamily="sans-serif" fontWeight="bold">
              Buy Pro
            </Text>
          </Button>
        </Box>

        <Box mt="1rem">
          <List textAlign="left">
            <ListItem color="rgb(16,24,52)" fontWeight="semibold">
              All Basic features, plus
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="royalblue" />
              Create a team
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="royalblue" />
              Collaborate with others
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="royalblue" />
              Add your own branding
            </ListItem>
          </List>
        </Box>
      </List>
    </VStack>
  );
};

export default EducationProPlan;
