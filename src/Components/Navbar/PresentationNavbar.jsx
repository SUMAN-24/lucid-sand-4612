import {
  Box,
  HStack,
  Stack,
  Divider,
  Button,
  Img,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Signup from "./Signup";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { BsStarFill, BsQuestionCircle } from "react-icons/bs";
import Features from "./Features";
import Solutions from "./Solutions";
import Resources from "./Resources";
import Pricing from "./Pricing";
import Enterprise from "./Enterprise";

const PresentationNavbar = ({ display, style }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <Stack style={style}>
      <HStack>
        {/* Logo */}
        <Box>
          <Link to="/">
            <Logo mt="1.1rem" ml="1rem" />
          </Link>
        </Box>

        <Box>
          <Box style={{ display: "flex", gap: "1rem" }} mt="1rem" ml="50rem">
            <Box>
              <Button
                backgroundColor="green.300"
                _hover={{ backgroundColor: "green.400" }}
                leftIcon={<BsStarFill />}
                fontFamily="body"
              >
                Upgrade
              </Button>
            </Box>
            <Tooltip hasArrow label="Get help">
              <Box
                cursor="pointer"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                roll="img"
              >
                {hover ? (
                  <Icon mt="0.5rem" as={BsQuestionCircle} w={6} h={6} />
                ) : (
                  <Icon mt="0.5rem" as={BsQuestionCircle} w={6} h={5} />
                )}
              </Box>
            </Tooltip>
            <Box>
              <Signup width="5.5rem" fontSize="md" display={display} />
            </Box>
          </Box>
        </Box>
      </HStack>
      <Divider orientation="horizontal" pt="0.3rem" size="100%" />
    </Stack>
  );
};

export default PresentationNavbar;
