import { Button, Heading } from "@chakra-ui/react";
import React from "react";

const Signup = ({ width, height, fontSize }) => {
  return (
    <div>
      <Button
        variant="solid"
        colorScheme="messenger"
        width={width}
        height={height}
        borderRadius={4}
      >
        <Heading fontSize={fontSize}>Sign up</Heading>
      </Button>
    </div>
  );
};

export default Signup;
