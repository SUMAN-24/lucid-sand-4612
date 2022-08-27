import { Box, Stack, VStack, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./Navbar/Logo";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Stack>
      <VStack mt="2rem">
        <Box>
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
            Welcome back!
          </Heading>
        </Box>

        <Box pt="1rem">
          <Text
            mt="0.5rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="md"
            fontWeight="semibold"
          >
            Log in to your Mentimeter account
          </Text>
        </Box>
        <Box pt="2rem">
          <Button colorScheme="facebook" width="25rem" gap="1rem">
            <BsFacebook size="1.5rem" />
            Log in with Facebook
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
            Log in with Google
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
            Your email address
          </Text>
        </Box>
      </VStack>
    </Stack>
  );
};

export default LoginPage;
