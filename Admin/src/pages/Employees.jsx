import {
  Flex,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Avatar,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useGetAllEmployeesQuery } from "../features/employeeSlice";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Employees = () => {
  const [page, setPage] = useState(1);
  const {
    data: employee,
    isError,
    isLoading,
    isFetching,
  } = useGetAllEmployeesQuery(page);
  console.log(employee);
  const totalPage = Math.ceil(employee && employee.totalPages);

  console.log(employee);
  console.log(totalPage);
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
          <Box
            width={"100%"}
            height={"fit-content"}
            bg={"#ffffff"}
            padding={4}
            boxShadow={"lg"}
            rounded={4}
          >
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text color={"#051724"} fontSize={23} fontWeight={800}>
                Employees
              </Text>

              <Button bg={"#001f54"} color={"#ffffff"}>
                Create
              </Button>
            </Flex>

            <TableContainer color={"#06253b"}>
              <Table variant='striped' colorScheme='teal'>
                <Thead>
                  <Tr>
                    <Th>Profile Picture</Th>
                    <Th>Full Name</Th>
                    <Th>Email</Th>
                    <Th>Department</Th>
                    <Th>Date of Entry</Th>
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
                    employee &&
                    employee.allEmployees.map((employee) => (
                      <Tr>
                        <Td>
                          {" "}
                          <Avatar
                            src={`http://localhost:5000/empProfilePics/${employee.profile}`}
                            name={employee.fullname}
                          />
                        </Td>
                        <Td>{employee.fullname}</Td>
                        <Td>{employee.email}</Td>
                        <Td>Full-Stack Developer</Td>
                        <Td>{employee.createdAt}</Td>
                      </Tr>
                    ))
                  )}
                </Tbody>
                <Tfoot></Tfoot>
              </Table>
            </TableContainer>
            <Flex width={"100%"} gap={7} padding={2} alignItems={"center"}>
              {" "}
              {page === 1 ? (
                <Button disabled>Previous</Button>
              ) : (
                <Button
                  bg={"#051724"}
                  color={"#ffffff"}
                  _hover={{ bg: "#051724" }}
                  onClick={() => setPage(page - 1)}
                  isLoading={isFetching}
                >
                  Previous
                </Button>
              )}
              <Text>
                {page} / {totalPage}
              </Text>
              {page === totalPage ? (
                <Button disabled>Next</Button>
              ) : (
                <Button
                  bg={"#051724"}
                  color={"#ffffff"}
                  onClick={() => setPage(page + 1)}
                  isLoading={isFetching}
                >
                  Next
                </Button>
              )}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Employees;
