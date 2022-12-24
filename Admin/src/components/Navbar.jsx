import {
  HStack,
  Input,
  Button,
  Text,
  Avatar,
  Flex,
  Switch,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const User = useSelector((state) => state.auth.User);

  return (
    <HStack
      width={"100%"}
      height={"10vh"}
      position={"sticky"}
      top={0}
      bg={"#ffffff"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={8}
      px={5}
      zIndex={100}
      boxShadow={"lg"}
      py={4}
    >
      <Flex width={"70%"}>
        <Input placeholder='Search Employees'></Input>
      </Flex>
      <Flex width={"30%"} gap={8} alignItems={"center"}>
        <Switch colorScheme='teal' size='lg' />
        <Flex gap={4} alignItems={"center"}>
          {User && (
            <>
              <Avatar name={User.user.fullname} src={User.user.profile} />
              <Text fontSize={17} fontWeight={600}>
                {User.user.fullname}
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </HStack>
  );
};

export default Navbar;
