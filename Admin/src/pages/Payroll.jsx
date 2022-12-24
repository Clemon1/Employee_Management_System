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
  TableContainer,
} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Payroll = () => {
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
            height={"85vh"}
            bg={"#ffffff"}
            padding={4}
            boxShadow={"lg"}
            rounded={4}
          >
            <Text fontSize={23} fontWeight={800}>
              {" "}
              Payroll
            </Text>
            <TableContainer>
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
                  <Tr>
                    <Td>
                      {" "}
                      <Avatar
                        name='Dan Abrahmov'
                        src='https://bit.ly/dan-abramov'
                      />
                    </Td>
                    <Td>Clemonazario Ezeh</Td>
                    <Td>clem@email.com</Td>
                    <Td>Full-Stack Developer</Td>
                    <Td>12-11-2022</Td>
                  </Tr>
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
