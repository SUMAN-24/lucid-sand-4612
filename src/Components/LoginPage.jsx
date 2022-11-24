import {
  Box,
  Stack,
  VStack,
  Button,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  HStack,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Logo from "./Navbar/Logo";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import FacebookLoginComponent from "../FacebookLoginComponent";

const LoginPage = () => {
  const [input, setInput] = useState("");

  const toast = useToast();
  //const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const loginDetails = async (formState) => {
    return await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
  };

  const initFormState = {
    email: "",
    password: "",
  };

  const authDetails = useContext(AppContext);

  const [formState, setFormState] = useState(initFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginDetails(formState)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.token) {
          authDetails.loginUser(
            formState.name,
            formState.email,
            formState.image,
            res.token
          );

          toast({
            title: "Logged in Successfully.",
            // description: "We've created your account for you.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          navigate("/app");
        } else {
          toast({
            title: "Enter correct Credentials.",
            description: res.error,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Stack>
      <VStack mt="2rem">
        <Box ml="-1rem">
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

        <Box>
          <Text
            mt="0.5rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="lg"
            fontWeight="semibold"
          >
            Log in to your Mentimeter account
          </Text>
        </Box>
        <Box pt="1.8rem">
          {/* <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=224322077663587&kid_directed_site=0&app_id=224322077663587&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%2F%3Fclient_id%3D224322077663587%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.mentimeter.com%252F%26state%3D%257B%2522client_id%2522%253A%2522224322077663587%2522%252C%2522network%2522%253A%2522facebook%2522%252C%2522display%2522%253A%2522popup%2522%252C%2522callback%2522%253A%2522_hellojs_bzgul96m%2522%252C%2522state%2522%253A%2522%2522%252C%2522redirect_uri%2522%253A%2522https%253A%252F%252Fwww.mentimeter.com%252F%2522%252C%2522scope%2522%253A%2522email%2522%257D%26scope%3Demail%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd06dbe32-6433-4631-a101-1311305936c5%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.mentimeter.com%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522client_id%2522%253A%2522224322077663587%2522%252C%2522network%2522%253A%2522facebook%2522%252C%2522display%2522%253A%2522popup%2522%252C%2522callback%2522%253A%2522_hellojs_bzgul96m%2522%252C%2522state%2522%253A%2522%2522%252C%2522redirect_uri%2522%253A%2522https%253A%252F%252Fwww.mentimeter.com%252F%2522%252C%2522scope%2522%253A%2522email%2522%257D%23_%3D_&display=popup&locale=en_GB&pl_dbl=0"> */}

          {/* <Button colorScheme="facebook" width="22.5rem" gap="1rem">
            <BsFacebook size="1.5rem" />
            Log in with Facebook
          </Button> */}
          <FacebookLoginComponent buttonInfo={"Log in with Facebook"} />

          {/* </a> */}
        </Box>
        <Box>
          <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=1062856113874-c1aibdvpemt0gd2i236kl0l4dr2ft189.apps.googleusercontent.com&response_type=token&redirect_uri=https%3A%2F%2Fwww.mentimeter.com%2F&state=%7B%22client_id%22%3A%221062856113874-c1aibdvpemt0gd2i236kl0l4dr2ft189.apps.googleusercontent.com%22%2C%22network%22%3A%22google%22%2C%22display%22%3A%22popup%22%2C%22callback%22%3A%22_hellojs_ccf4sau%22%2C%22state%22%3A%22%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Fwww.mentimeter.com%2F%22%2C%22scope%22%3A%22email%22%7D&scope=email&flowName=GeneralOAuthFlow">
            <Button
              colorScheme="white"
              width="22.5rem"
              gap="1rem"
              color="black"
              border="2px solid gray"
              _hover={{ backgroundColor: "gray" }}
            >
              <BsGoogle size="1.5rem" />
              Log in with Google
            </Button>
          </a>
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
          <FormControl>
            <FormLabel
              mt="0.5rem"
              color="rgba(16, 24, 52, 0.75)"
              fontSize="md"
              fontWeight="bold"
            >
              Your email address
            </FormLabel>
            <Input
              type="email"
              id="1"
              // value={formState.email}
              name="email"
              onChange={handleChange}
              width="22.5rem"
              borderRadius="none"
              height="2.3rem"
            />
            {!isError ? (
              <FormHelperText>It is your email</FormHelperText>
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
              Your password
            </FormLabel>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                // value={formState.password}
                id="2"
                name="password"
                type={show ? "text" : "password"}
                onChange={handleChange}
                borderRadius="none"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {!isError ? (
              <FormHelperText>
                Type correct password to secure login
              </FormHelperText>
            ) : (
              <FormErrorMessage fontWeight="semibold" color="red">
                Please fill in this field!
              </FormErrorMessage>
            )}

            <Button
              width="22.5rem"
              borderRadius="none"
              height="2.3rem"
              colorScheme="messenger"
              mt="0.6rem"
              fontWeight="bold"
              onClick={handleSubmit}
              disabled={localStorage.getItem("token")}
            >
              Log in
            </Button>
            <Box>
              <HStack>
                <Text
                  mt="0.5rem"
                  ml="2rem"
                  color="rgb(0,120,255)"
                  fontSize="md"
                  fontWeight="semibold"
                >
                  <Link to="/auth/reset_passwords">Forgot password?</Link>
                </Text>
                <Text
                  pt="0.5rem"
                  pl="2.5rem"
                  color="rgb(0,120,255)"
                  fontSize="md"
                  fontWeight="semibold"
                >
                  Log in with SSO
                </Text>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Text
                  mt="0.5rem"
                  ml="2rem"
                  color="rgba(16, 24, 52, 0.75)"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  New to Mentimeter?
                </Text>
                <Text
                  pt="0.5rem"
                  pl="0.1rem"
                  color="rgb(0,120,255)"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  <Link to="/signup">Sign up now</Link>
                </Text>
              </HStack>
            </Box>
          </FormControl>
        </Box>
      </VStack>
    </Stack>
  );
};

export default LoginPage;
