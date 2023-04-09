import {
  Flex,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Badge,
  FormControl,
  Select,
  useToast,
  Divider,
  Button,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  useGetSingleLeaveQuery,
  useUpdateLeaveMutation,
} from "../features/LeaveSlide";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { useState } from "react";

const SingleLeave = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { data: leave } = useGetSingleLeaveQuery(id);
  const [updateLeave] = useUpdateLeaveMutation();
  const [status, setStatus] = useState("");
  console.log(status);
  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      await updateLeave({ id, status }).unwrap();
      navigate("/leave-request");
      toast({
        title: `Leave is ${status}`,
        position: "top-right",
        variant: "left-accent",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error.data);
      toast({
        title: error.data,
        position: "top-right",
        variant: "left-accent",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  console.log(leave);
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
            Leave Request from {leave && leave.employee.fullname}
          </Text>
          <Flex
            width={["100%", "100%", "100%", "100%", "100%"]}
            height={"fit-content"}
            padding={4}
            gap={2}
            direction={"column"}
            bg={"#fafafa"}>
            <UnorderedList fontSize={20}>
              <ListItem>
                Email: <Text>{leave && leave.employee.email}</Text>
              </ListItem>
              <ListItem>
                Reason: <Text>{leave && leave.reason}</Text>
              </ListItem>
              <ListItem>
                <Text>
                  Type of leave:
                  <Badge variant='solid' colorScheme='green'>
                    {leave && leave.title}
                  </Badge>
                </Text>
              </ListItem>
              <ListItem>
                Leave date:
                <Text>
                  {moment(leave && leave.date_of_leave).format("DD MM, YYYY")}
                </Text>
              </ListItem>
              <ListItem>
                Resumption date:
                <Text>
                  {moment(leave && leave.date_of_resumption).format(
                    "DD MM, YYYY",
                  )}
                </Text>
              </ListItem>
              <ListItem>
                Status:
                <Text>
                  {leave && leave.status === "Pending" && (
                    <Badge rounded={5} p={1} variant='solid' colorScheme='blue'>
                      {leave && leave.status}
                    </Badge>
                  )}
                  {leave && leave.status === "Approved" && (
                    <Badge
                      rounded={5}
                      p={1}
                      variant='solid'
                      colorScheme='green'>
                      {leave && leave.status}
                    </Badge>
                  )}

                  {leave && leave.status === "Rejected" && (
                    <Badge rounded={5} p={1} variant='solid' colorScheme='red'>
                      {leave && leave.status}
                    </Badge>
                  )}
                </Text>
              </ListItem>
            </UnorderedList>
            <Divider />
            <form onSubmit={handleUpdate}>
              <Flex
                width={["100%", "100%", "50%", "50%", "40%"]}
                direction={"column"}>
                <Text fontSize={20}> Action</Text>
                <FormControl>
                  <Select
                    onChange={(e) => setStatus(e.target.value)}
                    variant='filled'
                    placeholder='Select Status'>
                    <option value='Approved'> Approved</option>
                    <option value='Rejected'> Rejected</option>
                  </Select>
                </FormControl>
                <Button type='submit' colorScheme='blue'>
                  Submit
                </Button>
              </Flex>
            </form>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default SingleLeave;
