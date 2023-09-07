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
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Icon,
  Tbody,
  Avatar,
  Td,
  Checkbox,
} from "@chakra-ui/react";
import { useAddTaskMutation } from "../features/TaskSlide";
import { useGetAllEmployeesQuery } from "../features/employeeSlice";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CreateTask = () => {
  const [page, setPage] = useState(1);
  const {
    data: Employee,
    isLoading,
    isError,
    isFetching,
  } = useGetAllEmployeesQuery(page);
  const totalPage = Math.ceil(Employee && Employee.totalPages);

  const [addTask] = useAddTaskMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [employee, setEmployee] = useState([]);

  const [priority, setPriority] = useState("");
  const [dateAssigned, setDateAssigned] = useState("");
  const [dateToDeliver, setDateToDeliver] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const body = {
    title,
    description,
    employee,

    priority,
    dateAssigned,
    dateToDeliver,
  };
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setEmployee([...employee, value]);
    } else {
      setEmployee(employee.filter((item) => item !== value));
    }
  };
  console.log(body);
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
    <Flex width={"100%"} height={"fit-content"} bg={"#edf2f9"}>
      <Sidebar />
      <Box
        width={["100%", "100%", "100%", "100%", "full"]}
        height={"fit-content"}
        bg={"#edf2f9"}>
        <Navbar />
        <Flex
          width={"100%"}
          justify={"center"}
          height={"fit-content"}
          bg={"#edf2f9"}>
          <Box width={"90%"} height={"fit-content"} padding={5}>
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
                <Box
                  width={"100%"}
                  height={"80vh"}
                  bg={"#ffffff"}
                  padding={4}
                  boxShadow={"lg"}
                  rounded={4}>
                  <Flex width={"100%"} justifyContent={"space-between"}>
                    <Text color={"#051724"} fontSize={23} fontWeight={800}>
                      Select Employees
                    </Text>
                  </Flex>

                  <TableContainer height={"78%"} color={"#06253b"}>
                    <Table
                      height={"fit-content"}
                      variant='striped'
                      size={"sm"}
                      colorScheme={"messenger"}>
                      <Thead>
                        <Tr>
                          <Th>Select</Th>
                          <Th>Profile Picture</Th>
                          <Th>Full Name</Th>
                          <Th>Email</Th>
                          <Th>Department</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {isError ? (
                          <Tr>
                            <Text textAlign={"center"} fontSize={18}>
                              Error fetching Employee
                            </Text>
                          </Tr>
                        ) : (
                          Employee &&
                          Employee.allEmployees.map((employee) => (
                            <Tr key={employee._id}>
                              <Td>
                                <Checkbox
                                  colorScheme='green'
                                  value={employee._id}
                                  onChange={handleCheckboxChange}
                                />
                              </Td>
                              <Td>
                                <Avatar
                                  src={`http://localhost:5000/empProfilePics/${employee.profile}`}
                                  name={employee.fullname}
                                />
                              </Td>
                              <Td>{employee.fullname}</Td>
                              <Td>{employee.email}</Td>
                              <Td>{employee.department.name}</Td>

                              <Td> </Td>
                            </Tr>
                          ))
                        )}
                      </Tbody>
                    </Table>
                  </TableContainer>

                  <Flex
                    width={"100%"}
                    justifyContent={"flex-end"}
                    gap={7}
                    padding={2}
                    alignItems={"center"}>
                    {" "}
                    {page === 1 ? (
                      <Button rounded={100} width={30} disabled>
                        <Icon as={IoIosArrowBack} />
                      </Button>
                    ) : (
                      <Button
                        bg={"#051724"}
                        rounded={100}
                        width={30}
                        color={"#ffffff"}
                        _hover={{ bg: "#051724 !important" }}
                        onClick={() => setPage(page - 1)}
                        isLoading={isFetching}>
                        <Icon as={IoIosArrowBack} />
                      </Button>
                    )}
                    <Text>
                      {page} / {totalPage}
                    </Text>
                    {page === totalPage ? (
                      <Button rounded={100} width={30} disabled>
                        {" "}
                        <Icon as={IoIosArrowForward} />
                      </Button>
                    ) : (
                      <Button
                        bg={"#051724"}
                        rounded={100}
                        width={30}
                        color={"#ffffff"}
                        _hover={{ bg: "#051724 !important" }}
                        onClick={() => setPage(page + 1)}
                        isLoading={isFetching}>
                        <Icon as={IoIosArrowForward} />
                      </Button>
                    )}
                  </Flex>
                </Box>
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
