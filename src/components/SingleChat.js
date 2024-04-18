import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import ScrollableFeed from "react-scrollable-feed";

const SingleChat = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="3"
      >
        <Text fontWeight="bold" fontSize="2xl">
          Demo for youtube
        </Text>
        <Button color={"black"}>
          <i className="fas fa-cog"></i>
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        w="100%"
        height="100%"
        justifyContent="flex-end"
      >
        <div className="messages">
          <ScrollableFeed>
            <div>king</div>
          </ScrollableFeed>
        </div>
        <FormControl id="first-name" isRequired mt={3} p={1}>
          <Box display="flex" gap="2">
            <Input
              // variant="filled"
              placeholder="Enter a message.."
              // value={newMessage}
              // onChange={typingHandler}
            />
            <Button colorScheme="green">
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default SingleChat;
