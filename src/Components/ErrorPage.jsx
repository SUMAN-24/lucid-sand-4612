import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import image from "../Media/images/Error404_image.svg";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const text = "homepage";
  const navigate = useNavigate();

  return (
    <div>
      {/* navbar */}
      <Navbar
        display={text}
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgb(255,255,255)",
          zIndex: 1,
        }}
      />

      <Stack>
        <VStack>
          <Image w="auto" h="auto" src={image} alt="Error 404 not found" />
          <Heading fontSize="2.5rem">You’ve found our 404 Word Cloud</Heading>
          <Text
            fontSize="1.2rem"
            textAlign="center"
            fontWeight="semibold"
            color="rgb(86,92,111)"
          >
            Unfortunately, we couldn't find the page you're looking for! Head to
            our
          </Text>
          <Text
            fontSize="1.2rem"
            textAlign="center"
            fontWeight="semibold"
            color="rgb(86,92,111)"
          >
            homepage by clicking the button below.
          </Text>
          <HStack>
            <Link
              href="mailto:khansuman240694@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="mail us"
              _hover={{textDecorationStyle:"none"}}
            >
              <Button variant="ghost" _hover={{ bgColor: "rgb(236,237,239)" }}>
                Email us
              </Button>
            </Link>

            <Button
              variant="solid"
              colorScheme="messenger"
              width="8rem"
              borderRadius={4}
              onClick={() => {
                navigate("/");
              }}
            >
              <Heading fontSize="md">Homepage</Heading>
            </Button>
          </HStack>
        </VStack>
      </Stack>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ErrorPage;
