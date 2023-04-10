import {
  Flex,
  Box,
  Text,
  HStack,
  Button,
  Avatar,
  Card,
  CardBody,
  Badge,
  Spinner,
  Icon,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import moment from "moment";
import { useParams } from "react-router-dom";
import {
  useGetSingleEmployeeQuery,
  useGetTaskEmployeeQuery,
} from "../features/employeeSlice";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { SlPeople } from "react-icons/sl";
import { BsCalendarCheck } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const SingleEmployee = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleEmployeeQuery(id);
  const { data: task } = useGetTaskEmployeeQuery(id);
  console.log(task);
  return (
    <Flex width={"100%"} height={"fit-content"}>
      <Sidebar />
      <Box
        width={["100%", "100%", "100%", "100%", "82%"]}
        marginLeft={[0, 0, 0, 0, "243px"]}
        height={"fit-content"}
        bg={"#edf2f9"}>
        <Navbar />

        <Flex width={"100%"} justifyContent={"center"} height={"100vh"} p={5}>
          <Box
            width={"100%"}
            height={"100%"}
            bg={"#ffffff"}
            rounded={5}
            padding={5}>
            <Flex
              flexDirection={"column"}
              flexWrap={"wrap"}
              gap={4}
              width={"100%"}
              height={"56vh"}
              marginBottom={4}>
              {isLoading && (
                <Flex
                  width={"100%"}
                  height={"56vh"}
                  justifyContent={"center"}
                  alignItems={"center"}>
                  <Spinner thickness='4px' color='blue.500' size='xl' />
                </Flex>
              )}
              {data && (
                <Flex flexDirection={"column"} width={"100%"} height={"100vh"}>
                  <Flex
                    direction={["column", "column", "row", "row", "row"]}
                    justify={"center"}
                    width={"100%"}
                    spacing={"24px"}>
                    <Avatar
                      size='2xl'
                      name={data.fullname}
                      src={`http://localhost:5000/empProfilePics/${data.profile}`}
                    />

                    <Box>
                      <HStack color={"#051724"} spacing={2}>
                        <Icon as={CgProfile} fontSize={30} color={"#051724"} />
                        <Text color={"#051724"} fontSize={25} fontWeight={500}>
                          {data.fullname}
                        </Text>
                      </HStack>
                      <HStack color={"#051724"} spacing={2}>
                        <Icon
                          as={MdOutlineMarkEmailRead}
                          fontSize={30}
                          color={"#051724"}
                        />

                        <Text fontSize={25} fontWeight={500}>
                          {data.email}
                        </Text>
                      </HStack>
                      <HStack color={"#051724"} spacing={2}>
                        <Icon
                          as={HiOutlineRectangleGroup}
                          fontSize={30}
                          color={"#051724"}
                        />

                        <Text fontSize={25} fontWeight={500}>
                          {data.department.name}
                        </Text>
                      </HStack>
                      <HStack color={"#051724"} spacing={2}>
                        <Icon as={SlPeople} fontSize={30} color={"#051724"} />

                        <Text fontSize={25} fontWeight={500} color={"#051724"}>
                          {data.gender}
                        </Text>
                      </HStack>
                      <HStack color={"#051724"} spacing={2}>
                        <Icon
                          as={BsCalendarCheck}
                          fontSize={30}
                          color={"#051724"}
                        />

                        <Text fontSize={25} fontWeight={500} color={"#051724"}>
                          {moment(data.createdAt).format("DD MMM, YYYY")}
                        </Text>
                      </HStack>
                    </Box>
                    <Link to={`/employees/update/${data._id}`}>
                      <Button
                        width={["20%", "20%", "15%", "12%", "8%"]}
                        variant={"solid"}
                        colorScheme='blue'
                        fontSize={28}>
                        <Icon as={FiEdit} />
                      </Button>
                    </Link>
                  </Flex>
                  {/* Task */}
                  <Flex width={"100%"} flexDirection={"column"}>
                    <Text fontSize={22} fontWeight={700} color={"#051724"}>
                      Task Assigned:
                    </Text>
                    <Flex
                      width={"100%"}
                      flex={"1 1 0"}
                      flexWrap={"wrap"}
                      background={"#ffffff"}
                      height={"fit-content"}
                      gap={2}
                      justifyContent={"flex-start"}>
                      {/* Tasks */}

                      {task && task <= 0 && (
                        <>
                          <Text>No task assigned yet.</Text>
                        </>
                      )}
                      {task &&
                        task.map((task) => (
                          <Card
                            key={task._id}
                            Card
                            width={"16.8rem"}
                            rounded={"lg"}
                            bg={"#ffffff"}
                            boxShadow={"lg"}>
                            <CardBody>
                              <Text
                                noOfLines={[1]}
                                fontSize={18}
                                marginBottom={3}
                                fontWeight={600}>
                                {task.title}
                              </Text>

                              <Flex width={"100%"}>
                                {task.completion === "Pending" && (
                                  <Badge
                                    rounded={5}
                                    p={1}
                                    variant='solid'
                                    colorScheme='blue'>
                                    {task.completion}
                                  </Badge>
                                )}
                                {task.completion === "Completed" && (
                                  <Badge
                                    rounded={5}
                                    p={1}
                                    variant='solid'
                                    colorScheme='green'>
                                    {task.completion}
                                  </Badge>
                                )}
                              </Flex>
                            </CardBody>
                          </Card>
                        ))}
                    </Flex>
                  </Flex>
                </Flex>
              )}
              {isError && (
                <Flex
                  width={"100%"}
                  height={"56vh"}
                  justifyContent={"center"}
                  alignItems={"center"}>
                  <Text fontSize={25} fontWeight={500}>
                    Error getting all department
                  </Text>
                </Flex>
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SingleEmployee;
