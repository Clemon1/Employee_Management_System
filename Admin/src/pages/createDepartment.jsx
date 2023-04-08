import {
  Flex,
  Box,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateDepartmentMutation } from "../features/departmentSlice";
const Create_Department = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createDepartment] = useCreateDepartmentMutation();

  const body = {
    name,
    description,
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDepartment(body);
      navigate("/department");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex width={"100%"} height={"fit-content"}>
      <Sidebar />
      <Box
        width={["100%", "100%", "100%", "100%", "82%"]}
        marginLeft={[0, 0, 0, 0, "243px"]}
        height={"fit-content"}
        bg={"#edf2f9"}>
        <Navbar />

        <Flex
          width={"100%"}
          justifyContent={"center"}
          height={"100vh"}
          py={20}
          px={5}>
          <Box width={"50%"} height={"fit-content"} bg={"#ffffff"} padding={5}>
            <form action='' onSubmit={handleSubmit}>
              <Text fontSize={23} fontWeight={700}>
                Create Department
              </Text>
              <Flex direction={"column"} gap={4} width={"100%"}>
                <FormControl>
                  <FormLabel fontSize={18} fontWeight={600}>
                    Department Name
                  </FormLabel>
                  <Input
                    border={"2px #051724 solid !important"}
                    fontWeight={600}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={18} fontWeight={600}>
                    Description
                  </FormLabel>
                  <Input
                    border={"2px #051724 solid !important"}
                    fontWeight={600}
                    onChange={(e) => setDescription(e.target.value)}
                    type='text'
                  />
                </FormControl>
                <Button
                  bg={"#051724"}
                  color={"#ffffff"}
                  width={140}
                  type='submit'
                  _hover={{
                    color: "#051724",
                    background: "#f4f4f4",
                    border: "2px #051724 solid",
                    fontWeight: 700,
                  }}>
                  Submit
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Create_Department;
