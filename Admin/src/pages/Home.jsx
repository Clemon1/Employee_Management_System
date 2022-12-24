import {
  Box,
  Flex,
  Image,
  FormControl,
  Text,
  FormLabel,
  useToast,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import abstract from "../assets/circle.jpg";

const Home = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = {
    fullname,
    email,
    password,
  };
  const navigate = useNavigate();
  const toast = useToast();
  const registerForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/register", body);
      await res.data;

      navigate("/login");
      toast({
        title: "Registered Successfully",
        position: "top-right",
        variant: "left-accent",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error.response.data);
      toast({
        title: error.response.data,
        position: "top-right",
        variant: "left-accent",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex width={"100%"} height={"100vh"} justifyContent bg={"#edf2f9"}>
      <Box width={"50%"} height={"100%"}>
        <Image
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          src={abstract}
        />
      </Box>
      <Flex
        width={"50%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"#051724"}
        padding={6}
      >
        <Flex
          width={"70%"}
          height={"fit-content"}
          border={"2px solid #3B4856"}
          rounded={20}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={4}
          color={"#ffffff"}
        >
          <form className='formBody1' onSubmit={registerForm}>
            <Text fontSize={"28px"} fontWeight={800}>
              Register
            </Text>

            <FormControl marginBottom={4}>
              <FormLabel>Full Name</FormLabel>
              <Input
                onChange={(e) => setFullname(e.target.value)}
                rounded={20}
                border={"2px solid"}
                type='text'
              />
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                rounded={20}
                border={"2px solid"}
                type='email'
              />
            </FormControl>
            <FormControl marginBottom={4}>
              <FormLabel> Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                rounded={20}
                border={"2px solid"}
                type='password'
              />
            </FormControl>

            <Button
              width={"100%"}
              bg={"cyan.800"}
              color={"#ffffff"}
              rounded={20}
              fontSize={18}
              type='submit'
              fontWeight={600}
              _hover={{ bg: "#009CF9" }}
            >
              SignUp
            </Button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
