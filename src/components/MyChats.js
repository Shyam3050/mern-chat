import { Box, Button, Text, VStack, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import IndividualChat from "./IndividualChat";
import { ChatState } from "../context/chatProvider";
import axios from "axios";
import ChatLoading from "./ChatLoading";
import { getSender } from "./utils/chatLogic";

const MyChats = () => {
  const toast = useToast();

  const { user, chats, setChats } = ChatState();
  console.log(user, "user");
   
  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chats", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);
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
          {chats ? (
            <VStack overflowY="scroll">
              {chats.map((chat) => (
                <IndividualChat key={chat._id} chat={chat} user={getSender(user, chat.users)} />
              ))}
            </VStack>
          ) : (
            <ChatLoading />
          )}
        </Box>
      </Box>
    </>
  );
};

export default MyChats;
