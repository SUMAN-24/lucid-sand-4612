import {
  Box,
  HStack,
  Stack,
  Divider,
  Button,
  Tooltip,
  Wrap,
  WrapItem,
  Avatar,
  Menu,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  MenuButton,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { BsStarFill, BsQuestionCircle } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const PresentationNavbar = ({ display, style }) => {
  const [hover, setHover] = useState(false);
  const { state, logoutUser } = useContext(AppContext);
  const name = state.name;
  const email = state.email;
  const image = state.image;

  const navigate = useNavigate();

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
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
              {/* <Signup width="5.5rem" fontSize="md" display={display} /> */}
              {/* <Wrap>
                <WrapItem>
                  <Avatar bg="teal.600" name={name} src={image} />
                </WrapItem>
              </Wrap> */}

              <Menu>
                <MenuButton>
                  <Wrap>
                    <WrapItem>
                      <Avatar bg="teal.600" name={name} src={image} />
                    </WrapItem>
                  </Wrap>
                </MenuButton>

                <MenuList>
                  <MenuGroup title={name}>
                    {/* <MenuItem>{name}</MenuItem>
                    <MenuItem>{email}</MenuItem> */}
                  </MenuGroup>
                  <MenuGroup title={email}>
                    {/* <MenuItem>{name}</MenuItem>
                    <MenuItem>{email}</MenuItem> */}
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem fontSize="medium" fontFamily="sans-serif">
                      Settings
                    </MenuItem>
                    <MenuItem fontSize="medium" fontFamily="sans-serif">
                      Billing
                    </MenuItem>
                    <MenuItem fontSize="medium" fontFamily="sans-serif">
                      Find available teams
                    </MenuItem>
                    <MenuItem fontSize="medium" fontFamily="sans-serif">
                      Team settings
                    </MenuItem>
                    <MenuItem fontSize="medium" fontFamily="sans-serif">
                      Manage members
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem
                      onClick={handleLogout}
                      fontSize="medium"
                      fontFamily="sans-serif"
                    >
                      Log out
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
      </HStack>
      <Divider orientation="horizontal" />
    </Stack>
  );
};

export default PresentationNavbar;
