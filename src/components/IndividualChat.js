import { Avatar, Box, Text } from "@chakra-ui/react";

const IndividualChat = ({ chat, user }) => {
  console.log(user);
  console.log(chat);
  return (
    <Box
      display="flex"
      p="1"
      background="#272727"
      borderLeftRadius={30}
      w="100%"
      cursor="pointer"
      _hover={{ backgroundColor: "#636363" }}
    >
      <Avatar
        name={user.userName}
        src={user.pic}
        color="#272727"
        backgroundColor="#A0AEC0"
      />
      <Box ml="2">
        <Text fontWeight={"bold"}>{user.userName}</Text>
        <Text fontSize="small" color={"#A0AEC0"}>
          {/* {chat.latestMessage.content.length > 50
            ? chat.latestMessage.content.substring(0, 51) + "..."
            : chat.latestMessage.content} */}
        </Text>
      </Box>
    </Box>
  );
};

export default IndividualChat;
