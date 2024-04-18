import React, { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import axios from "axios";
import { ChatState } from "../context/chatProvider";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import SideDrawer from "../components/SideDrawer";
const ChatPage = () => {
  // const fetchData = async () => {
  //   const {data} = await axios.get("/api/chats");
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const { user } = ChatState();
  const user = true;
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px" >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
 