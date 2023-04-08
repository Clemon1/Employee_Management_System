import {
  Flex,
  Box,
  Text,
  Button,
  Card,
  Icon,
  HStack,
  CardBody,
  Avatar,
  Spinner,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useGetSingleDepartmentQuery } from "../features/departmentSlice";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import { BiDialpadAlt } from "react-icons/bi";
const SingleDepartment = () => {
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil();
  const { id } = useParams();
  const { data, isError, isLoading } = useGetSingleDepartmentQuery(id);
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

        <Flex
          width={"100%"}
          justifyContent={"center"}
          height={"100vh"}
          padding={5}>
          <Flex
            flexDirection={"column"}
            width={"100%"}
            height={"100%"}
            gap={20}
            rounded={5}
            padding={5}>
            <Flex direction={"column"} width={"100%"} p={2} gap={2}>
              <Flex width={"100%"} gap={8}>
                {data && data.singleDepartment && (
                  <Text fontSize={43} fontWeight={700} marginBottom={4}>
                    {data.singleDepartment.name}
                  </Text>
                )}

                <AvatarGroup size='md' max={2}>
                  {data &&
                    data.empDept.map((dept) => (
                      <Avatar
                        key={dept._id}
                        name={dept.fullname}
                        src={`http://localhost:5000/empProfilePics/${dept.profile}`}
                      />
                    ))}
                </AvatarGroup>
              </Flex>
              {data && data.singleDepartment && (
                <Text fontSize={20} fontWeight={500} marginBottom={4}>
                  {data.singleDepartment.description}
                </Text>
              )}
            </Flex>
            <Flex
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

              {data && data.empDept.length === 0 && (
                <Flex justify={"center"} width={"100%"}>
                  <Text fontSize={26} fontWeight={500}>
                    No Employee has been assinged
                  </Text>
                </Flex>
              )}
              <Flex width={"100%"} gap={7}>
                {data &&
                  data.empDept.map((department) => (
                    <Card
                      width={250}
                      height={"fit-content"}
                      bg={"#ffffff"}
                      rounded={"xl"}
                      boxShadow='lg'
                      p={4}
                      key={department._id}>
                      <Flex
                        width={"100%"}
                        height={73}
                        justifyContent={"center"}>
                        <Avatar
                          position={"relative"}
                          top={"-58px"}
                          size={"xl"}
                          name={department.fullname}
                          src={`http://localhost:5000/empProfilePics/${department.profile}`}
                        />
                      </Flex>
                      <HStack justify={"center"}>
                        <Text
                          textAlign={"center"}
                          fontWeight={700}
                          fontSize={20}>
                          {department.fullname}
                        </Text>
                      </HStack>
                    </Card>
                  ))}
              </Flex>

              {isError && (
                <Flex
                  width={"100%"}
                  height={"30vh"}
                  bg={"#ffffff"}
                  justifyContent={"center"}
                  alignItems={"center"}>
                  <Text fontSize={25} fontWeight={500}>
                    Error getting all department
                  </Text>
                </Flex>
              )}
            </Flex>

            {/* <Flex
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
            >
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
                  isLoading={isFetching}
                >
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
                  isLoading={isFetching}
                >
                  <Icon as={IoIosArrowForward} />
                </Button>
              )}
            </Flex> */}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SingleDepartment;
