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
  Badge,
  Th,
  Td,
  Button,
  Icon,
  TableContainer,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useGetAllLeaveQuery } from "../features/LeaveSlide";
import { Link } from "react-router-dom";
import moment from "moment";
import { BiEditAlt } from "react-icons/bi";

const Leave = () => {
  const { data: leave, isLoading, isError } = useGetAllLeaveQuery();

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
          <Text fontSize={22} fontWeight={600}>
            Leave Request
          </Text>
          <TableContainer height={"78%"} color={"#06253b"}>
            <Table
              height={"fit-content"}
              variant='striped'
              colorScheme={"messenger"}>
              <Thead>
                <Tr>
                  <Th>Profile Picture</Th>
                  <Th>Full Name</Th>
                  <Th>reason for leave</Th>
                  <Th>Leave Date</Th>
                  <Th>Resumption date</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {leave &&
                  leave.map((leave) => (
                    <Tr key={leave._id}>
                      <Td>
                        <Avatar
                          name={leave.employee.fullname}
                          src={`http://localhost:5000/empProfilePics/${leave.employee.profile}`}
                        />
                      </Td>
                      <Td>{leave.employee.fullname}</Td>
                      <Td>
                        <Text
                          width={"150px"}
                          whiteSpace={"nowrap"}
                          overflow={"hidden"}
                          textOverflow={"ellipsis"}>
                          {leave.reason}
                        </Text>
                      </Td>
                      <Td>
                        {moment(leave.date_of_leave).format("DD MMM YYYY")}
                      </Td>
                      <Td>
                        {moment(leave.date_of_resumption).format("DD MMM YYYY")}
                      </Td>
                      {leave.status === "Pending" && (
                        <Td>
                          <Badge
                            rounded={5}
                            p={1}
                            variant='solid'
                            colorScheme='blue'>
                            {leave.status}
                          </Badge>
                        </Td>
                      )}
                      {leave.status === "Approved" && (
                        <Td>
                          <Badge
                            rounded={5}
                            p={1}
                            variant='solid'
                            colorScheme='green'>
                            {leave.status}
                          </Badge>
                        </Td>
                      )}
                      {leave.status === "Rejected" && (
                        <Td>
                          <Badge
                            rounded={5}
                            p={1}
                            variant='solid'
                            colorScheme='red'>
                            {leave.status}
                          </Badge>
                        </Td>
                      )}
                      <Td>
                        <Link to={`/leave-request/${leave._id}`}>
                          <Button
                            rounded={"xl"}
                            variant={"solid"}
                            colorScheme={"blue"}>
                            <Icon as={BiEditAlt} fontSize={18} />
                          </Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Flex>
  );
};

export default Leave;
