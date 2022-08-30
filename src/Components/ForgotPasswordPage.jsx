import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => setEmail(e.target.value);

  const isError = email === "";

  const text = "auth/reset_passwords";
  return (
    <VStack>
      <Navbar
        display={text}
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgb(255,255,255",
          zIndex: 1,
        }}
      />
      <Box pt="7rem">
        <Heading fontFamily="body" fontWeight="semibold" fontSize="5xl">
          Reset Password
        </Heading>
      </Box>
      <Box pb="2rem">
        <FormControl isInvalid={isError}>
          <FormLabel
            mt="0.5rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="md"
            fontWeight="bold"
          >
            Your email
          </FormLabel>
          <Input
            type="email"
            value={email}
            name="email"
            onChange={handleInputChange}
            width="30rem"
            borderRadius="none"
            height="2.3rem"
            //style={{ border: "2px solid gray" }}
          />
          {!isError ? (
            <FormHelperText>It is your email</FormHelperText>
          ) : (
            <FormErrorMessage fontWeight="semibold" color="red">
              Please fill in this field!
            </FormErrorMessage>
          )}

          <Button
            disabled={email === ""}
            mt="1rem"
            width="30rem"
            borderRadius="none"
            height="2.3rem"
            backgroundColor="rgb(219,220,225)"
            _hover={{ backgroundColor: "gray" }}
          >
            Reset password
          </Button>
        </FormControl>
      </Box>
      <Footer />
    </VStack>
  );
};

export default ForgotPasswordPage;
