import { Box } from "@chakra-ui/react";
import React from "react";
import SingleChat from "./SingleChat";

const ChatBox = () => {
  return (
    <Box w={"68%"} backgroundColor={"#272727"} display="flex" flexDir="column">
      <SingleChat />
    </Box>
  );
};

export default ChatBox;
