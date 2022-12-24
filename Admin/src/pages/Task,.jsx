import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Task = () => {
  return (
    <Flex width={"100%"} height={"fit-content"}>
      <Sidebar />
      <Box
        width={"82%"}
        marginLeft={"243px"}
        height={"fit-content"}
        bg={"#edf2f9"}
      >
        <Navbar />

        <Box width={"100%"} height={"100vh"} padding={5}>
          <h2> Tasks</h2>
        </Box>
      </Box>
    </Flex>
  );
};

export default Task;
