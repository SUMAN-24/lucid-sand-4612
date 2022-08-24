import { Button, Heading } from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  return (
    <div>
      <Button
        variant="solid"
        colorScheme="messenger"
        width="5.5rem"
        borderRadius={4}
      >
        <Heading fontSize="md">Sign up</Heading>
      </Button>
    </div>
  );
};

export default Signup;
