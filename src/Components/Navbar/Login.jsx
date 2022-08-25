import { Button, Heading } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <div>
      <Button
        variant="ghost"
        width="4rem"
        borderRadius={5}
        _hover={{ bg: "none", color: "blue" }}
      >
        <Heading fontSize="md" color="gray.30">
          Log in
        </Heading>
      </Button>
    </div>
  );
};

export default Login;
