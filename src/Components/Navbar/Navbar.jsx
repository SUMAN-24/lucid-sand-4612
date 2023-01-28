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
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ display, style }) => {
  return (
    <Stack style={style}>
      <HStack>
        {/* Logo */}
        <Link to="/">
          <Logo mt="1.1rem" ml="3.5rem" />
        </Link>

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
              <NavLink
                to="/plans"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "gray.30",
                })}
              >
                <Pricing />
              </NavLink>
            </Box>
            <Box>
              <NavLink
                to="/enterprise"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "gray.30",
                })}
              >
                <Enterprise />
              </NavLink>
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
              <Signup width="5.5rem" fontSize="md" display={display} placeholder="Sign up" />
            </Box>
          </Box>
        </Box>
      </HStack>
      <Divider pt="0.3rem" />
    </Stack>
  );
};

export default Navbar;
