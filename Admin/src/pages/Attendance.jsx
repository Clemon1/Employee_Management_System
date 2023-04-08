import {
  Flex,
  Box,
  Input,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Avatar,
  Tr,
  Th,
  Td,
  TableCaption,
  Badge,
  TableContainer,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import moment from "moment";
import { useGetAttendanceQuery } from "../features/attendanceSlice";
import { useState } from "react";
const Attendance = () => {
  const [date, setDate] = useState("");
  console.log(date);
  const { data, isLoading } = useGetAttendanceQuery(date);

  console.log(data && data.length);
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
            height={"100%"}
            bg={"#ffffff"}
            padding={4}
            boxShadow={"lg"}
            rounded={5}>
            <Flex width={"100%"} gap={2}>
              <form>
                <Flex width={"100%"} gap={2}>
                  <Input
                    onChange={(e) => setDate(e.target.value)}
                    width={"100%"}
                    type={"date"}
                    border={"2px solid #051724 !important"}
                    borderRadius={"8px 4px"}
                  />
                </Flex>
              </form>
            </Flex>

            {/* Tables */}

            <TableContainer>
              <Table variant='striped' colorScheme='blue'>
                {data && data.length <= 0 && (
                  <>
                    <TableCaption>
                      <Flex
                        height={"30vh"}
                        width={"100%"}
                        justify={"center"}
                        align={"center"}>
                        <Text fontSize={23} align={"center"}>
                          No attendance record found
                        </Text>
                      </Flex>
                    </TableCaption>
                  </>
                )}
                {date && <TableCaption>Attenance for {date} </TableCaption>}
                <Thead>
                  <Tr>
                    <Th>Profile</Th>
                    <Th>Fullname</Th>
                    <Th>Gendar</Th>
                    <Th>Start Time</Th>
                    <Th>End Time</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data &&
                    data.map((data) => (
                      <Tr key={data._id}>
                        <Td>
                          <Avatar
                            name={data.staff.fullname}
                            src={`http://localhost:5000/empProfilePics/${data.staff.profile}`}
                          />
                        </Td>
                        <Td>{data.staff.fullname}</Td>
                        <Td>{data.staff.gender}</Td>
                        <Td>{moment(data.startDate).format("L")}</Td>
                        <Td>{moment(data.endDate).format("L")}</Td>
                        <Td>
                          {data.attendance === "Present" && (
                            <Badge
                              variant='solid'
                              colorScheme='green'
                              padding={2}
                              rounded={9}>
                              {data.attendance}
                            </Badge>
                          )}
                          {data.attendance === "Absent" && (
                            <Badge
                              variant='solid'
                              colorScheme='red'
                              padding={2}
                              rounded={9}>
                              {data.attendance}
                            </Badge>
                          )}
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Attendance;
