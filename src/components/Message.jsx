import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Message = ({ style }) => {
  return (
    <Box width="100%" mt={6} display="flex" justifyContent={style.position}>
      <Text
        backgroundColor={style.position === "flex-end" ? "#148761" : "#3A3939"}
        p={2}
        fontWeight="bold"
        borderRadius="5"
        borderBottomLeftRadius={style.position === "flex-start" ? "20" : "0"}
        borderBottomRightRadius={style.position === "flex-end" ? "20" : "0"}
        maxW="400px"
      >
        Hi ra shyam
      </Text>
    </Box>
  );
};

export default Message;
