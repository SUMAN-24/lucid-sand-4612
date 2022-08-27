import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Navbar/Logo";
import { BsFacebook, BsGoogle } from "react-icons/bs";

const SignUpPage = () => {
  return (
    <Stack>
      <VStack>
        <Box mt="2rem">
          <Link to="/">
            <Logo />
          </Link>
        </Box>
        <Box pt="1rem">
          <Heading
            fontFamily="body"
            fontSize="3rem"
            fontWeight="semibold"
            color="rgb(16,24,52)"
          >
            Create a free account
          </Heading>
        </Box>
        <Box pt="2rem">
          <Button colorScheme="facebook" width="25rem" gap="1rem">
            <BsFacebook size="1.5rem" />
            Sign up with Facebook
          </Button>
        </Box>
        <Box>
          <Button
            colorScheme="white"
            width="25rem"
            gap="1rem"
            color="black"
            border="2px solid gray"
            _hover={{ backgroundColor: "gray" }}
          >
            <BsGoogle size="1.5rem" />
            Sign up with Google
          </Button>
        </Box>
        <Box pt="1rem">
          <Text
            mt="0.5rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="sm"
            fontWeight="semibold"
          >
            or using email
          </Text>
        </Box>
        <Box>
          <Text
            mt="0.5rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="lg"
            fontWeight="bold"
          >
            First and last name
          </Text>
        </Box>
      </VStack>
    </Stack>
  );
};

export default SignUpPage;
