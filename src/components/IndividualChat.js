import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react'

const IndividualChat = () => {
  return (
    <Box
      display="flex"
      p="1"
      background="#272727"
      borderLeftRadius={30}
      w="100%"
    >
      <Avatar
        name="Dan Abrahmov"
        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jp"
        color="#272727"
        backgroundColor="#A0AEC0"
      />
      <Box ml="2">
        <Text fontWeight={"bold"}>Shyam Sundar</Text>
        <Text fontSize="small" color={"#A0AEC0"}>
          hi roshan
        </Text>
      </Box>
    </Box>
  );
}

export default IndividualChat