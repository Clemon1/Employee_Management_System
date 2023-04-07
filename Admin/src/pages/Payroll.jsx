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
  TableCaption,
  Select,
  FormControl,
  FormLabel,
  Input,
  Button,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import moment from "moment";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useCountEmployeeQuery } from "../features/employeeSlice";

import {
  useGetPayrollQuery,
  useCreatePayrollMutation,
} from "../features/payrollSlice";
import { useState } from "react";

const Payroll = () => {
  const [employee, setEmployee] = useState("");
  const [salary, setSalary] = useState("");
  const { data: employ } = useCountEmployeeQuery();
  const { data: payroll } = useGetPayrollQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createPayroll] = useCreatePayrollMutation();
  const body = {
    employee,
    salary,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPayroll(body);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
            height={"85vh"}
            bg={"#ffffff"}
            padding={4}
            boxShadow={"lg"}
            rounded={4}>
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text fontSize={23} fontWeight={800}>
                Payroll
              </Text>
              <Button bgColor={"blue.400"} onClick={onOpen}>
                Add Payroll
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add Payroll</ModalHeader>
                  <ModalCloseButton />
                  <form onSubmit={handleSubmit}>
                    <ModalBody>
                      <FormControl>
                        <FormLabel>Employee</FormLabel>

                        <Select
                          onChange={(e) => setEmployee(e.target.value)}
                          placeholder='Select Employee'>
                          {employ &&
                            employ.allEmp.map((emp) => (
                              <option key={emp._id} value={emp._id}>
                                {emp.fullname}
                              </option>
                            ))}
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Salary</FormLabel>
                        <Input
                          onChange={(e) => setSalary(e.target.value)}
                          type='text'
                        />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        type='submit'
                        colorScheme='blue'
                        mr={3}
                        onClick={onClose}>
                        Add
                      </Button>
                    </ModalFooter>
                  </form>
                </ModalContent>
              </Modal>
            </Flex>

            <TableContainer>
              <Table variant='striped' colorScheme='teal'>
                <Thead>
                  <Tr>
                    <Th>Profile Picture</Th>
                    <Th>Full Name</Th>
                    <Th>Email</Th>
                    <Th>Salary</Th>
                    <Th>Date </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {payroll && payroll.length <= 0 && (
                    <>
                      <Flex width={"100%"}>
                        <Text fontSize={24}> No Payroll record found</Text>
                      </Flex>
                    </>
                  )}
                  {payroll &&
                    payroll.map((payroll) => (
                      <Tr>
                        <Td>
                          {" "}
                          <Avatar
                            src={`http://localhost:5000/empProfilePics/${payroll.employee.profile}`}
                            name={payroll.employee.fullname}
                          />
                        </Td>
                        <Td>{payroll.employee.fullname}</Td>
                        <Td>{payroll.employee.email}</Td>
                        <Td>{payroll.salary}</Td>
                        <Td>
                          {moment(payroll.createdAt).format("DD MMM YYYY")}
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
                <Tfoot></Tfoot>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Payroll;
