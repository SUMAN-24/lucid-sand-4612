import { Button, Heading } from "@chakra-ui/react";
import React from "react";

const Enterprise = () => {
  return (
    <div>
      <Button
        variant="ghost"
        width="5rem"
        borderRadius={5}
        _hover={{ bg: "none", color: "blue" }}
      >
        <Heading fontSize="md" color="gray.30">
          Enterprise
        </Heading>
      </Button>
    </div>
  );
};

export default Enterprise;
