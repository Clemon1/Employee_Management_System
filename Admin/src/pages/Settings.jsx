import { Flex, Box, Text, Avatar, Card, CardBody } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
const Settings = () => {
  const User = useSelector((state) => state.auth.User);
  console.log(User);
  return (
    <Flex width={"100%"} height={"fit-content"}>
      <Sidebar />
      <Box
        width={["100%", "100%", "100%", "100%", "82%"]}
        marginLeft={[0, 0, 0, 0, "243px"]}
        height={"fit-content"}
        bg={"#edf2f9"}>
        <Navbar />

        <Box width={"100%"} height={"100vh"} padding={5}>
          <Text fontSize={22} fontWeight={500}>
            Settings
          </Text>
          <Flex
            width={"100%"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            flex={"1 1 0"}>
            <Avatar size={"2xl"} name={User.user.fullname} />
            <Card
              width={"fit-content"}
              padding={"4px"}
              borderRadius={14}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"12vh"}
              background={"#ffffff"}>
              <Text justifySelf={"center"} fontSize={25} fontWeight={500}>
                {User.user.fullname}
              </Text>
            </Card>
            <Card
              width={"fit-content"}
              padding={"4px"}
              borderRadius={14}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"12vh"}
              background={"#ffffff"}>
              <Text justifySelf={"center"} fontSize={25} fontWeight={500}>
                {User.user.email}
              </Text>
            </Card>
            <Card
              width={"fit-content"}
              padding={"4px"}
              borderRadius={14}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"12vh"}
              background={"#ffffff"}>
              <Text justifySelf={"center"} fontSize={25} fontWeight={500}>
                {User.user.role}
              </Text>
            </Card>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Settings;
