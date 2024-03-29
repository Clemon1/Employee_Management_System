import {
  Flex,
  Box,
  Card,
  CardBody,
  Badge,
  Text,
  Select,
  Button,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useGetAllTaskQuery } from "../features/TaskSlide";
import { useState } from "react";
const Task = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, isError } = useGetAllTaskQuery(query);
  console.log(query);
  console.log(data);
  return (
    <Flex width={"100%"} height={"fit-content"} bg={"#edf2f9"}>
      <Sidebar />
      <Box
        width={["100%", "100%", "100%", "100%", "full"]}
        height={"fit-content"}
        bg={"#edf2f9"}>
        <Navbar />

        <Box width={"100%"} height={"fit-content"} padding={5} bg={"#edf2f9"}>
          <Box width={"100%"} height={"100%"} padding={4} rounded={5}>
            <Flex
              width={"100%"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              flexDirection={["column", "column", "row", "row"]}
              alignItems={"center"}
              marginBottom={8}
              gap={5}>
              <Card
                bg={"#051724"}
                width={["100%", "100%", "20%", "24%"]}
                rounded={"lg"}
                height={"20vh"}>
                <CardBody>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"#ffffff"}>
                    Total Task
                  </Text>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"rgb(0, 186, 199)"}>
                    {data && data.countTotalTask}
                  </Text>
                </CardBody>
              </Card>
              <Card
                bg={"#051724"}
                width={["100%", "100%", "20%", "24%"]}
                rounded={"lg"}
                height={"20vh"}>
                <CardBody>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"#ffffff"}>
                    Completed Task
                  </Text>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"rgb(0, 186, 199)"}>
                    {data && data.countCompleted}
                  </Text>
                </CardBody>
              </Card>
              <Card
                bg={"#051724"}
                width={["100%", "100%", "20%", "24%"]}
                rounded={"lg"}
                height={"20vh"}>
                <CardBody>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"#ffffff"}>
                    Pending Task
                  </Text>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"rgb(0, 186, 199)"}>
                    {data && data.countPending}
                  </Text>
                </CardBody>
              </Card>
              <Card
                bg={"#051724"}
                width={["100%", "100%", "20%", "24%"]}
                rounded={"lg"}
                height={"20vh"}>
                <CardBody>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"#ffffff"}>
                    Task In Progress
                  </Text>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"rgb(0, 186, 199)"}>
                    {data && data.countProgress}
                  </Text>
                </CardBody>
              </Card>
              <Card
                bg={"#051724"}
                width={["100%", "100%", "20%", "24%"]}
                rounded={"lg"}
                height={"20vh"}>
                <CardBody>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"#ffffff"}>
                    Late Delivery
                  </Text>
                  <Text
                    fontSize={[19, 19, 19, 24]}
                    fontWeight={700}
                    color={"rgb(0, 186, 199)"}>
                    {data && data.countLateDelivery}
                  </Text>
                </CardBody>
              </Card>
            </Flex>
            <Flex
              width={"100%"}
              px={10}
              py={2}
              gap={4}
              justifyContent={"flex-end"}
              alignItems={"center"}>
              <Text fontSize={18} fontWeight={700}>
                Filter
              </Text>
              <Select
                onChange={(e) => setQuery(e.target.value)}
                width={150}
                fontWeight={600}
                border={"2px #051724 solid !important"}>
                <option value=''>All</option>
                <option value='Pending'>Pending</option>
                <option value='Started'>In Progress</option>
                <option value='Completed'>Completed</option>
                <option value='Late Delivery'>Late Delivery</option>
              </Select>
              <Link to='/tasks/create'>
                <Button variant={"solid"} colorScheme={"blue"}>
                  Create Task
                </Button>
              </Link>
            </Flex>
            <Flex
              width={"100%"}
              height={"fit-content"}
              wrap={"wrap"}
              justify={"flex-start"}
              gap={4}>
              {data &&
                data.allTask.map((task) => (
                  <Card
                    key={task._id}
                    width={"19.8rem"}
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
                      <Flex
                        width={"100%"}
                        gap={4}
                        marginBottom={3}
                        alignItems={"center"}>
                        <AvatarGroup size='md' max={2}>
                          {task.employee.map((employee) => (
                            <Avatar
                              name={employee.fullname}
                              src={`http://localhost:5000/empProfilePics/${employee.profile}`}
                            />
                          ))}
                        </AvatarGroup>

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
                            colorScheme='blue'>
                            {task.completion}
                          </Badge>
                        )}
                        {task.completion === "Started" && (
                          <Badge
                            rounded={5}
                            p={1}
                            variant='solid'
                            colorScheme='cyan'>
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
                        {task.completion === "Late Delivery" && (
                          <Badge
                            rounded={5}
                            p={1}
                            variant='solid'
                            colorScheme='red'>
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
