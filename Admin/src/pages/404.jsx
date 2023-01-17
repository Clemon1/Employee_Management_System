import { Flex } from "@chakra-ui/react";

import ErroAnimation from "../assets/42479-page-not-found-404.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      bg={"#edf2f9"}
      justify={"center"}
      align={"center"}
    >
      <Flex justify={"center"} width={"100%"} height={"100%"}>
        <Lottie animationData={ErroAnimation} />
      </Flex>
    </Flex>
  );
};

export default ErrorPage;
