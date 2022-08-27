import { Box, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from "./Navbar/Logo";

const LoginPage = () => {
  return (
    <Stack>
      <VStack>
        <Box>
          <Logo />
        </Box>
      </VStack>
    </Stack>
  );
};

export default LoginPage;
