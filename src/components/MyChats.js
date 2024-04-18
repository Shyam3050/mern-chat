import { Avatar, Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import IndividualChat from "./IndividualChat";

const MyChats = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        w={"31%"}
        backgroundColor="#3a3939"
      >
        <Box display={"flex"} justifyContent={"space-between"} p="2">
          <Text fontSize={"2xl"}>My Chats</Text>
          <Button>New Group +</Button>
        </Box>
        <Box p="2" mt={"5"} overflowY="scroll">
          <VStack>
            <IndividualChat />
            <IndividualChat />

            <IndividualChat />
            <IndividualChat />
            <IndividualChat />

            <IndividualChat />
            <IndividualChat />
            <IndividualChat />

            <IndividualChat />
            <IndividualChat />
            <IndividualChat />

            <IndividualChat />
            <IndividualChat />
            <IndividualChat />

            <IndividualChat />
            <IndividualChat />
            <IndividualChat />

            <IndividualChat />
            <IndividualChat />
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default MyChats;
