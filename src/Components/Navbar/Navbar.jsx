import { Box, HStack, Stack, Divider } from "@chakra-ui/react";
import React from "react";
import Features from "./Features";
import Solutions from "./Solutions";
import Resources from "./Resources";
import Pricing from "./Pricing";
import Enterprise from "./Enterprise";
import Login from "./Login";
import Signup from "./Signup";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Stack>
      <HStack>
        {/* Logo */}
        <Logo mt="1.1rem" ml="5rem" />

        {/* Sections */}
        <Box>
          <Box style={{ display: "flex", gap: "2px" }} mt="1rem" ml="10rem">
            <Box>
              <Features />
            </Box>
            <Box>
              <Solutions />
            </Box>
            <Box>
              <Resources />
            </Box>
            <Box>
              <Pricing />
            </Box>
            <Box>
              <Enterprise />
            </Box>
          </Box>
        </Box>

        {/* Login */}

        <Box>
          <Box style={{ display: "flex", gap: "3px" }} mt="1rem" ml="15rem">
            <Box>
              <Login />
            </Box>
            <Box>
              <Signup width="5.5rem" fontSize="md" />
            </Box>
          </Box>
        </Box>
      </HStack>
      <Divider pt="0.3rem" />
    </Stack>
  );
};

export default Navbar;
