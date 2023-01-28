import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({
  width,
  height,
  fontSize,
  fontFamily,
  display,
  placeholder,
  marginLeft
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="solid"
        colorScheme="messenger"
        width={width}
        height={height}
        borderRadius={4}
        marginLeft={marginLeft}
        onClick={() => {
          navigate(`/signup?referral=${display}`);
        }}
      >
        <Heading fontSize={fontSize} fontFamily={fontFamily}>
          {placeholder}
        </Heading>
      </Button>
    </div>
  );
};

export default Signup;
