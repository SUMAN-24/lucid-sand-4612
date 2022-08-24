import React from "react";
import {
  Button,
  Heading,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import FocusLock from "react-focus-lock";

const Resources = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Popover
        isOpen={isOpen}
        _focus={{ outline: "none" }}
        returnFocusOnClose={false}
      >
        <PopoverTrigger>
          <Button
            variant="ghost"
            width="6rem"
            borderRadius={5}
            _hover={{ bg: "none", color: "blue" }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <Heading fontSize="md" color="gray.30">
              Resources
            </Heading>{" "}
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
        </PopoverTrigger>
        <PopoverContent width="140px">
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverBody
              textAlign="left"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <List>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Text as="b" fontSize="md" color="gray.45">
                    Howto
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Text as="b" fontSize="md" color="gray.45">
                    MentiAcademy
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Text as="b" fontSize="md" color="gray.45">
                    Templates
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Text as="b" fontSize="md" color="gray.45">
                    Webinars
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Text as="b" fontSize="md" color="gray.45">
                    Blog
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Text as="b" fontSize="md" color="gray.45">
                    Integrations
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Text as="b" fontSize="md" color="gray.45">
                    Help Center
                  </Text>
                </ListItem>
              </List>
            </PopoverBody>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Resources;
