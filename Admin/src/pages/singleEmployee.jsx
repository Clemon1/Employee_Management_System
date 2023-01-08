import {
  Flex,
  Box,
  Text,
  HStack,
  Button,
  Avatar,
  Spinner,
  Icon,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useGetSingleEmployeeQuery } from "../features/employeeSlice";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { SlPeople } from "react-icons/sl";
import { BsCalendarCheck } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const SingleEmployee = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleEmployeeQuery(id);
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

        <Flex width={"100%"} justifyContent={"center"} height={"100vh"} p={5}>
          <Box
            width={"100%"}
            height={"100%"}
            bg={"#ffffff"}
            rounded={5}
            padding={5}
          >
            <Flex
              flexDirection={"column"}
              flexWrap={"wrap"}
              gap={4}
              width={"100%"}
              height={"56vh"}
              marginBottom={4}
            >
              {isLoading && (
                <Flex
                  width={"100%"}
                  height={"56vh"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Spinner thickness='4px' color='blue.500' size='xl' />
                </Flex>
              )}
              {data && (
                <Flex flexDirection={"column"} width={"100%"} height={"100vh"}>
                  <HStack justify={"center"} width={"100%"} spacing={"24px"}>
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
                    <Button variant={"solid"} colorScheme='blue' fontSize={28}>
                      <Icon as={FiEdit} />
                    </Button>
                  </HStack>
                  {/* Task */}
                  <Flex>
                    <Text fontSize={22} fontWeight={700} color={"#051724"}>
                      Task Assigned:
                    </Text>
                  </Flex>
                </Flex>
              )}
              {isError && (
                <Flex
                  width={"100%"}
                  height={"56vh"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
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
