import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Navbar/Logo";
import { BsGoogle } from "react-icons/bs";
import FacebookLoginComponent from "../FacebookLoginComponent";
import { Api_Base_Url } from "../utils/common";

const SignUpPage = () => {
  const toast = useToast();
  const initUserDetails = {
    name: "",
    email: "",
    password: "",
  }
  const [userDetails, setUserDetails] = useState(initUserDetails);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUserDetails({...userDetails, [name]:value});
  };

  //const isError = input === "";
  const isError = '';

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`${Api_Base_Url}/signup`,{
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(res => {
      setLoading(false);
      toast({
        title: res.msg,
        status: res.msg==="User already exists"?"info":"success",
        duration: 3000,
        isClosable: true,
      });
    })
    .catch(err=>console.log(err))
  }

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
          {/* <Button colorScheme="facebook" width="22.5rem" gap="1rem">
            <BsFacebook size="1.5rem" />
            Sign up with Facebook
          </Button> */}
          <FacebookLoginComponent buttonInfo={"Sign up with Facebook"} />
        </Box>
        <Box>
          <Button
            colorScheme="white"
            width="22.5rem"
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
          <FormControl isInvalid={isError}>
            <FormLabel
              mt="0.5rem"
              color="rgba(16, 24, 52, 0.75)"
              fontSize="md"
              fontWeight="bold"
            >
              First and last name
            </FormLabel>
            <Input
              type="text"
              name='name'
              onChange={handleInputChange}
              width="22.5rem"
              borderRadius="none"
              height="2.3rem"
            />
            {!isError ? (
              // <FormHelperText>It is your email</FormHelperText>
              ""
            ) : (
              <FormErrorMessage fontWeight="semibold" color="red">
                Please fill in this field!
              </FormErrorMessage>
            )}

            <FormLabel
              mt="0.5rem"
              color="rgba(16, 24, 52, 0.75)"
              fontSize="md"
              fontWeight="bold"
            >
              Your email address
            </FormLabel>
            <Input
              type="text"
              name="email"
              onChange={handleInputChange}
              width="22.5rem"
              borderRadius="none"
              height="2.3rem"
            />
            {!isError ? (
              // <FormHelperText>It is your email</FormHelperText>
              ""
            ) : (
              <FormErrorMessage fontWeight="semibold" color="red">
                Please fill in this field!
              </FormErrorMessage>
            )}

            <FormLabel
              mt="0.1rem"
              color="rgba(16, 24, 52, 0.75)"
              fontSize="md"
              fontWeight="bold"
            >
              Choose a password
            </FormLabel>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                type={show ? "text" : "password"}
                onChange={handleInputChange}
                borderRadius="none"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {!isError ? (
              <FormHelperText>At least 6 characters</FormHelperText>
            ) : (
              <FormErrorMessage fontWeight="semibold" color="red">
                Please fill in this field!
              </FormErrorMessage>
            )}

            <Button
              isLoading={loading}
              loadingText="Signing Up..."
              spinnerPlacement='end'
              width="22.5rem"
              borderRadius="none"
              height="2.3rem"
              colorScheme="messenger"
              mt="0.6rem"
              fontWeight="bold"
              onClick={handleRegister}
            >
              Sign up
            </Button>

            <Text
              width="22.5rem"
              fontSize="sm"
              mt="0.6rem"
              color="rgba(16, 24, 52, 0.75)"
              fontWeight="semibold"
              display="flex"
              gap="0.2rem"
            >
              By signing up you accept our{" "}
              <Link to="#">
                <Text textDecoration="underline">terms of use</Text>
              </Link>{" "}
              and{" "}
              <Link to="#">
                <Text textDecoration="underline">policies</Text>
              </Link>
              .
            </Text>
            <Box>
              <HStack>
                <Text
                  mt="0.5rem"
                  ml="2rem"
                  color="rgba(16, 24, 52, 0.75)"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Already have an account?
                </Text>
                <Text
                  pt="0.5rem"
                  pl="0.1rem"
                  color="rgb(0,120,255)"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  <Link to="/login">Log in</Link>
                </Text>
              </HStack>
            </Box>
            <Text
              pt="0.4rem"
              pl="6.5rem"
              color="rgb(0,120,255)"
              fontSize="lg"
              fontWeight="bold"
            >
              Sign up with SSO
            </Text>
          </FormControl>
        </Box>
      </VStack>
    </Stack>
  );
};

export default SignUpPage;
