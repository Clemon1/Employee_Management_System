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
  HStack,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useGetSearchEmployeesQuery } from "../features/employeeSlice";

const Search = () => {
  const { key } = useParams();
  const { data, isError } = useGetSearchEmployeesQuery(key);
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

        <Box width={"100%"} height={"100vh"} padding={5}>
          <Box width={"100%"} height={"100%"} px={4} py={14} rounded={5}>
            <Flex
              width={"100%"}
              wrap={"wrap"}
              justify={"flex-start"}
              gap={5}
              rowGap={"4rem"}>
              {data && data.length === 0 && (
                <HStack width={"100%"} height={"60vh"} justify={"center"}>
                  <Text fontSize={25} fontWeight={600}>
                    No Employee found
                  </Text>
                </HStack>
              )}

              {data &&
                data.map((emp) => (
                  <Card
                    key={emp._id}
                    width={"15.2rem"}
                    borderRadius={"33% 1%"}
                    bg={"#ffffff"}
                    boxShadow={"lg"}>
                    <VStack spacing={20}>
                      <Avatar
                        position={"absolute"}
                        size={"2xl"}
                        top={"-50"}
                        border={"4px #ffffff solid !important"}
                        name={emp.fullname}
                        src={`http://localhost:5000/empProfilePics/${emp.profile}`}
                      />

                      <CardBody>
                        <VStack>
                          <Text
                            noOfLines={[1]}
                            fontSize={20}
                            marginBottom={3}
                            fontWeight={600}>
                            {emp.fullname}
                          </Text>
                          <Text
                            width={"150px"}
                            whiteSpace={"nowrap"}
                            overflow={"hidden"}
                            textOverflow={"ellipsis"}
                            fontSize={17}
                            marginBottom={3}
                            fontWeight={500}>
                            {emp.email}
                          </Text>
                          <Text
                            noOfLines={[1]}
                            fontSize={17}
                            marginBottom={3}
                            fontWeight={500}>
                            {emp.department.name}
                          </Text>
                        </VStack>
                      </CardBody>
                    </VStack>
                  </Card>
                ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Search;
