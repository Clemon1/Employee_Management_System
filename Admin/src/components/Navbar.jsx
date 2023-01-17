import {
  HStack,
  Input,
  Button,
  Text,
  Avatar,
  Icon,
  Flex,
  Switch,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  const User = useSelector((state) => state.auth.User);
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${key}`);
  };

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
        <form onSubmit={handleSearch}>
          <HStack width={"42rem"} border={"none"} borderRadius={22} spacing={0}>
            <Input
              placeholder='Search Employees'
              fontWeight={600}
              height={"48px"}
              borderRadius={"22px 0px 0px 22px "}
              width={"100%"}
              border='2px #051724 solid!important'
              _focus={{ border: "1px #051724 solid" }}
              outline={"none !important"}
              focusBorderColor='none!important'
              onChange={(e) => setKey(e.target.value)}
            />
            <Button
              padding={"22px 19px"}
              border='2px #051724 solid!important'
              borderRadius={"0px 22px 22px 0px"}
              variant={"ghost"}
              bg={"#051724"}
              color={"#ffffff"}
              type='submit'
            >
              <Icon as={BiSearch} fontSize={25} />
            </Button>
          </HStack>
        </form>
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
