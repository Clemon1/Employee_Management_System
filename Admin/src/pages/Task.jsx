import {
  Flex,
  Box,
  Card,
  CardBody,
  Badge,
  Text,
  Button,
  Avatar,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useGetAllTaskQuery } from "../features/TaskSlide";
const Task = () => {
  const { data, isLoading, isError } = useGetAllTaskQuery();
  return (
    <Flex width={"100%"} height={"fit-content"}>
      <Sidebar />
      <Box
        width={"82%"}
        marginLeft={"243px"}
        height={"fit-content"}
        bg={"#edf2f9"}
      >
        <Navbar />

        <Box width={"100%"} height={"100vh"} padding={5}>
          <Box width={"100%"} height={"100%"} padding={4} rounded={5}>
            <Flex
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              marginBottom={8}
              gap={5}
            >
              <Card bg={"#051724"} width={"24%"} rounded={"lg"} height={"20vh"}>
                <CardBody>
                  <Text fontSize={23} fontWeight={700} color={"#ffffff"}>
                    Total Task
                  </Text>
                  <Text
                    fontSize={24}
                    fontWeight={700}
                    color={"rgb(0, 186, 199)"}
                  >
                    {data && data.countTotalTask}
                  </Text>
                </CardBody>
              </Card>
              <Card bg={"#051724"} width={"24%"} rounded={"lg"} height={"20vh"}>
                <CardBody>
                  <Text fontSize={24} fontWeight={700} color={"#ffffff"}>
                    Completed Task
                  </Text>
                  <Text
                    fontSize={24}
                    fontWeight={700}
                    color={"rgb(0, 186, 199)"}
                  >
                    {data && data.countCompleted}
                  </Text>
                </CardBody>
              </Card>
              <Card bg={"#051724"} width={"24%"} rounded={"lg"} height={"20vh"}>
                <CardBody>
                  <Text fontSize={23} fontWeight={700} color={"#ffffff"}>
                    Pending Task
                  </Text>
                  <Text
                    fontSize={24}
                    fontWeight={700}
                    color={"rgb(0, 186, 199)"}
                  >
                    {data && data.countPending}
                  </Text>
                </CardBody>
              </Card>
              <Link to='/tasks/create'>
                <Button variant={"solid"} colorScheme={"blue"}>
                  Create Task
                </Button>
              </Link>
            </Flex>

            <Flex width={"100%"} wrap={"wrap"} justify={"flex-start"} gap={4}>
              {data &&
                data.allTask.map((task) => (
                  <Card
                    key={task._id}
                    Card
                    width={"20rem"}
                    rounded={"lg"}
                    bg={"#ffffff"}
                    boxShadow={"lg"}
                  >
                    <CardBody>
                      <Text
                        noOfLines={[1]}
                        fontSize={18}
                        marginBottom={3}
                        fontWeight={600}
                      >
                        {task.title}
                      </Text>
                      <Flex
                        width={"100%"}
                        gap={4}
                        marginBottom={3}
                        alignItems={"center"}
                      >
                        <Avatar
                          name={task.employee.fullname}
                          src={`http://localhost:5000/empProfilePics/${task.employee.profile}`}
                        />
                        <Text noOfLines={[1]} fontSize={16} fontWeight={400}>
                          {task.employee.fullname}
                        </Text>
                      </Flex>
                      <Flex width={"100%"}>
                        {task.completion === "Pending" && (
                          <Badge
                            rounded={5}
                            p={1}
                            variant='solid'
                            colorScheme='blue'
                          >
                            {task.completion}
                          </Badge>
                        )}
                        {task.completion === "Completed" && (
                          <Badge
                            rounded={5}
                            p={1}
                            variant='solid'
                            colorScheme='green'
                          >
                            {task.completion}
                          </Badge>
                        )}
                      </Flex>
                    </CardBody>
                  </Card>
                ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Task;
