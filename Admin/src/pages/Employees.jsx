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
  Icon,
  TableContainer,
} from "@chakra-ui/react";
import { useGetAllEmployeesQuery } from "../features/employeeSlice";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import moment from "moment";

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
        width={["100%", "100%", "100%", "100%", "82%"]}
        marginLeft={[0, 0, 0, 0, "243px"]}
        height={"fit-content"}
        bg={"#edf2f9"}>
        <Navbar />

        <Box width={"100%"} height={"100vh"} padding={5}>
          <Box
            width={"100%"}
            height={"80vh"}
            bg={"#ffffff"}
            padding={4}
            boxShadow={"lg"}
            rounded={4}>
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text color={"#051724"} fontSize={23} fontWeight={800}>
                Employees
              </Text>
              <Link to='/employees/create'>
                <Button bg={"#051724"} color={"#ffffff"}>
                  Create
                </Button>
              </Link>
            </Flex>

            <TableContainer height={"78%"} color={"#06253b"}>
              <Table
                height={"fit-content"}
                variant='striped'
                colorScheme={"messenger"}>
                <Thead>
                  <Tr>
                    <Th>Profile Picture</Th>
                    <Th>Full Name</Th>
                    <Th>Email</Th>
                    <Th>Department</Th>
                    <Th>Date of Entry</Th>
                    <Th>Details</Th>
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
                      <Tr key={employee._id}>
                        <Td>
                          <Avatar
                            src={`http://localhost:5000/empProfilePics/${employee.profile}`}
                            name={employee.fullname}
                          />
                        </Td>
                        <Td>{employee.fullname}</Td>
                        <Td>{employee.email}</Td>
                        <Td>{employee.department.name}</Td>
                        <Td>
                          {moment(employee.createdAt).format("DD MMM YYYY")}
                        </Td>
                        <Td>
                          {" "}
                          <Link to={`/employees/${employee._id}`}>
                            <Button
                              rounded={"full"}
                              variant={"solid"}
                              colorScheme={"blue"}>
                              E
                            </Button>
                          </Link>
                        </Td>
                      </Tr>
                    ))
                  )}
                </Tbody>
                <Tfoot></Tfoot>
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
        </Box>
      </Box>
    </Flex>
  );
};

export default Employees;
