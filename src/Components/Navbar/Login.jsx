import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="/login">
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
      </Link>
    </div>
  );
};

export default Login;
