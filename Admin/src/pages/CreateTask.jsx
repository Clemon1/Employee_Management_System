import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  useToast,
  Select,
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useAddTaskMutation } from "../features/TaskSlide";
import { useGetAllEmployeesQuery } from "../features/employeeSlice";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const { data: Employee, isLoading } = useGetAllEmployeesQuery();
  const [addTask] = useAddTaskMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [employee, setEmployee] = useState("");
  const [asignedBy, setAsignedBy] = useState("");
  const [priority, setPriority] = useState("");
  const [dateAssigned, setDateAssigned] = useState("");
  const [dateToDeliver, setDateToDeliver] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  console.log(Employee);
  const body = {
    title,
    description,
    employee,
    asignedBy,
    priority,
    dateAssigned,
    dateToDeliver,
  };
  const handleTask = async (e) => {
    e.preventDefault();
    try {
      await addTask(body).unwrap();
      navigate("/tasks");
      toast({
        title: "Task Added",
        position: "top-right",
        variant: "left-accent",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: error.data,
        position: "top-right",
        variant: "left-accent",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
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
        <Flex width={"100%"} justify={"center"} height={"fit-content"}>
          <Box width={"60%"} height={"100vh"} padding={5}>
            <form onSubmit={handleTask}>
              <Box
                width={"100%"}
                height='100%'
                rounded={5}
                bg={"#ffffff"}
                padding={5}>
                <Text fontWeight={700} fontSize='25' marginBottom={4}>
                  Assingn Task
                </Text>

                <Flex width={"100%"} gap={5} marginBottom={3}>
                  <FormControl>
                    <FormLabel fontSize={18}>Task Title</FormLabel>
                    <Input
                      border={"2px #051724 solid !important"}
                      fontWeight={600}
                      type='text'
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormControl>
                </Flex>

                <Flex width={"100%"} gap={5} marginBottom={5}>
                  <FormControl>
                    <FormLabel fontSize={18}>Employee Assigned</FormLabel>
                    <Select
                      fontWeight={600}
                      border={"2px #051724 solid !important"}
                      placeholder='Select Employee'
                      onChange={(e) => setEmployee(e.target.value)}>
                      {Employee &&
                        Employee.empAll.map((emp) => (
                          <option fontWeight={600} value={emp._id}>
                            {emp.fullname}
                          </option>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={18}>Assigned By:</FormLabel>
                    <Select
                      fontWeight={600}
                      border={"2px #051724 solid !important"}
                      placeholder='Select Assigner'
                      onChange={(e) => setAsignedBy(e.target.value)}>
                      {Employee &&
                        Employee.empAll.map((emp) => (
                          <option fontWeight={600} value={emp._id}>
                            {emp.fullname}
                          </option>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={18}>Priority:</FormLabel>
                    <Select
                      fontWeight={600}
                      border={"2px #051724 solid !important"}
                      placeholder='Select Priority'
                      onChange={(e) => setPriority(e.target.value)}>
                      <option fontWeight={600} value={"Low"}>
                        Low
                      </option>
                      <option fontWeight={600} value={"Medium"}>
                        Medium
                      </option>
                      <option fontWeight={600} value={"High"}>
                        High
                      </option>
                    </Select>
                  </FormControl>
                </Flex>

                <Flex width={"100%"} gap={5} marginBottom={3}>
                  <FormControl>
                    <FormLabel fontSize={18}>Date Assigned</FormLabel>
                    <Input
                      border={"2px #051724 solid !important"}
                      fontWeight={600}
                      type='date'
                      onChange={(e) => setDateAssigned(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={18}>Date to deliver</FormLabel>
                    <Input
                      border={"2px #051724 solid !important"}
                      fontWeight={600}
                      type='date'
                      onChange={(e) => setDateToDeliver(e.target.value)}
                    />
                  </FormControl>
                </Flex>

                <Flex width={"100%"} gap={3} marginBottom={5}>
                  <FormControl>
                    <FormLabel fontSize={18}>Description of task:</FormLabel>
                    <Textarea
                      border={"2px #051724 solid !important"}
                      fontWeight={600}
                      height={40}
                      onChange={(e) =>
                        setDescription(e.target.value)
                      }></Textarea>
                  </FormControl>
                </Flex>

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
              </Box>
            </form>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CreateTask;
