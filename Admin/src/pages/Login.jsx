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
import { Link, useNavigate } from "react-router-dom";
import abstract from "../assets/abstract.jpg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../features/authSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const body = {
    email,
    password,
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:5000/auth/login", body);
      dispatch(loginSuccess(res.data));
      navigate("/dashboard");
      toast({
        title: "Login Successfully",
        position: "top-right",
        variant: "left-accent",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      dispatch(loginFailure());
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
          height={"60%"}
          border={"2px solid #3B4856"}
          rounded={20}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={4}
          color={"#ffffff"}
        >
          <form className='formBody1' onSubmit={handleLogin}>
            <Text fontSize={"28px"} fontWeight={800}>
              Login
            </Text>
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
              fontWeight={600}
              type='submit'
              _hover={{ bg: "#009CF9" }}
            >
              Login
            </Button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
