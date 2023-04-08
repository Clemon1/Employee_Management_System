import {
  Flex,
  Box,
  Text,
  Button,
  Card,
  Icon,
  Stack,
  CardBody,
  Avatar,
  Spinner,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useGetAllDepartmentQuery } from "../features/departmentSlice";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Department = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError } =
    useGetAllDepartmentQuery(page);
  const totalPage = Math.ceil(data && data.totalPage);
  console.log(data);
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
          <Box width={"100%"} height={"100%"} rounded={5} padding={5}>
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text fontSize={23} fontWeight={700} marginBottom={4}>
                Total Departments : {data && data.countDepartment}
              </Text>

              <Link to={"/department/create"}>
                <Button variant={"solid"} bg={"#051724"} color={"#ffffff"}>
                  Create
                </Button>
              </Link>
            </Flex>
            <Flex
              flexWrap={"wrap"}
              gap={4}
              bg={"#edf2f9"}
              width={"100%"}
              height={["90vh", "92vh", "90vh", "70vh", "56vh"]}
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
              {data &&
                data.alldepartment.map((department) => (
                  <Card
                    width={["50%", "49%", "47%", "47%", "32%"]}
                    height={"10rem"}
                    bg={"#ffffff"}
                    rounded={9}
                    key={department._id}
                    boxShadow={"lg"}>
                    <CardBody>
                      <Stack mt='6' spacing='3'>
                        <Text
                          fontSize={20}
                          fontWeight={700}
                          wordBreak={"break-word"}>
                          {department.name}
                        </Text>
                        <Link to={`/department/${department._id}`}>
                          <Button
                            rounded={14}
                            width={100}
                            fontSize={18}
                            bg={"#051724"}
                            color={"rgb(0, 186, 199)"}>
                            Open
                          </Button>
                        </Link>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
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

            <Flex
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}>
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
              <Text fontWeight={600}>
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
        </Flex>
      </Box>
    </Flex>
  );
};

export default Department;
