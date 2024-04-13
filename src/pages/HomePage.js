import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl">
      <Box fontSize="4xl" bg="blue.600" color="white" textAlign={"center"}>
        <Text>Homepage</Text>
      </Box>
      <Box mt={5} p={4} bg="white">
        <Tabs variant="soft-rounded" isFitted>
          <TabList>
            <Tab>Sign In</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
                <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
