import {
  Flex,
  Box,
  Text,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Thead,
  Tbody,
  Avatar,
  Image,
  AvatarGroup,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  StatHelpText,
} from "@chakra-ui/react";
import { Line, Doughnut } from "react-chartjs-2";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BiHomeCircle, BiTask } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { MdTimeToLeave } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";
import { useCountEmployeeQuery } from "../features/employeeSlice";
import { useGetAllDepartmentQuery } from "../features/departmentSlice";
import moment from "moment";

import { useGetAllTaskQuery } from "../features/TaskSlide";
import { useGetAllLeaveQuery } from "../features/LeaveSlide";
ChartJS.register(ArcElement, Tooltip, Legend);
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

const Dashboard = ({ slide }) => {
  const { data: employee, isError, isLoading } = useCountEmployeeQuery();
  const { data: department } = useGetAllDepartmentQuery();
  const { data: task } = useGetAllTaskQuery();
  const { data: leave } = useGetAllLeaveQuery();
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ArcElement,
    Tooltip,
    Filler,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Employees",
      },
    },
  };
  const labels = moment.monthsShort();
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Number of Employees",
        data: [employee && employee.allEmp.length],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "#48cae4",
      },
    ],
  };

  const Data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Employees",
        data: [employee && employee.findMale, employee && employee.findFemale],
        backgroundColor: ["#6411ad", "#ff4d6d"],
        borderColor: ["#6411ad", "#ff4d6d"],
        borderWidth: 1,
        borderRadius: 30,
        cutout: 111,
        hoverOffset: 4,
        spacing: 10,
      },
    ],
  };

  console.log(employee);
  return (
    <Flex width={"100%"} height={"fit-content"}>
      <Sidebar slide={slide} />
      <Box
        width={["100%", "100%", "100%", "100%", "82%"]}
        marginLeft={[0, 0, 0, 0, "243px"]}
        height={"fit-content"}
        bg={"#edf2f9"}>
        <Navbar />
        <Box
          width={"100%"}
          height={"fit-content"}
          padding={[2, 2, 4, 5]}
          bg={"#edf2f9"}>
          <Flex
            width={"100%"}
            flexWrap={"wrap"}
            gap={"13px"}
            flex={"1 1 0"}
            flexDirection={["column", "column", "row", "row", "row"]}
            justifyContent={"center"}
            height={["fit-content", "fit-content", "60vh", "45vh"]}
            paddingBottom={8}>
            <Flex
              width={["100%", "95%", "46%", "48%", "48%"]}
              flexWrap={"wrap"}
              gap={2}
              height={["65vh", "70vh", "100%", "100%"]}>
              <Flex
                width={["48%", "49%", "48%", "48%"]}
                height={["45%", "45%", "49%", "49%"]}
                bg={"#ffffff"}
                flex={"1 1 0"}
                padding={4}
                alignItems={"center"}
                boxShadow={"md"}
                rounded={8}>
                <Stat color={"#051724"}>
                  <StatLabel
                    fontWeight={[600, 600, 600, 700]}
                    fontSize={[17, 17, 17, 18]}>
                    Total Employees
                  </StatLabel>
                  <StatNumber fontSize={[29, 29, 29, 30]} fontWeight={700}>
                    {employee && employee.countEmp}
                  </StatNumber>
                  <StatHelpText fontSize={16}>Employees</StatHelpText>
                </Stat>
                <Box
                  borderRadius={"100%"}
                  height={["11vh", "11vh", "9vh", "9vh"]}
                  padding={4}
                  bg={"#051724"}
                  color={"rgb(0, 186, 199)"}>
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={BsPeopleFill}
                  />
                </Box>
              </Flex>
              <Flex
                width={["48%", "49%", "48%", "48%"]}
                height={["45%", "45%", "49%", "49%"]}
                rounded={8}
                bg={"#ffffff"}
                flex={"1 1 0"}
                padding={4}
                alignItems={"center"}
                boxShadow={"md"}>
                <Stat color={"#051724"}>
                  <StatLabel
                    fontWeight={[600, 600, 600, 700]}
                    fontSize={[17, 17, 17, 18]}>
                    Total Task
                  </StatLabel>
                  <StatNumber fontSize={30} fontWeight={700}>
                    {task && task.countTotalTask}
                  </StatNumber>
                  <StatHelpText fontSize={16}>Assigned Tasks</StatHelpText>
                </Stat>
                <Box
                  borderRadius={"100%"}
                  height={["11vh", "11vh", "9vh", "9vh"]}
                  padding={4}
                  bg={"#051724"}
                  color={"rgb(0, 186, 199)"}>
                  <Icon alignSelf={"center"} fontSize={"24px"} as={BiTask} />
                </Box>
              </Flex>
              <Flex
                width={["48%", "49%", "48%", "48%"]}
                height={["45%", "45%", "49%", "49%"]}
                bg={"#ffffff"}
                flex={"1 1 0"}
                rounded={8}
                padding={4}
                alignItems={"center"}
                boxShadow={"md"}>
                <Stat color={"#051724"}>
                  <StatLabel
                    fontWeight={[600, 600, 600, 700]}
                    fontSize={[17, 17, 17, 18]}>
                    Departments
                  </StatLabel>
                  <StatNumber fontSize={30} fontWeight={700}>
                    {department && department.countDepartment}
                  </StatNumber>
                  <StatHelpText fontSize={16}>Total Department</StatHelpText>
                </Stat>
                <Box
                  borderRadius={["100%"]}
                  height={["11vh", "11vh", "9vh", "9vh"]}
                  padding={4}
                  bg={"#051724"}
                  color={"rgb(0, 186, 199)"}>
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={RiBuilding2Fill}
                  />
                </Box>
              </Flex>
              <Flex
                width={["48%", "49%", "48%", "48%"]}
                height={["45%", "45%", "49%", "49%"]}
                rounded={8}
                bg={"#ffffff"}
                flex={"1 1 0"}
                padding={4}
                alignItems={"center"}
                boxShadow={"md"}>
                <Stat color={"#051724"}>
                  <StatLabel
                    fontWeight={[600, 600, 600, 700]}
                    fontSize={[17, 17, 17, 18]}>
                    Leave Request
                  </StatLabel>
                  <StatNumber fontSize={30} fontWeight={700}>
                    {leave && leave.length}
                  </StatNumber>
                  <StatHelpText fontSize={16}>Employee leave</StatHelpText>
                </Stat>
                <Box
                  borderRadius={"100%"}
                  height={["11vh", "11vh", "9vh", "9vh"]}
                  padding={4}
                  bg={"#051724"}
                  color={"rgb(0, 186, 199)"}>
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={MdTimeToLeave}
                  />
                </Box>
              </Flex>
            </Flex>
            <Flex
              width={["100%", "100%", "50%", "45%", "50%"]}
              height={"100%"}
              alignItems={"center"}
              rounded={8}
              bg={"#ffffff"}
              padding={4}>
              <Line options={options} data={data} datasetIdKey='' />
            </Flex>
          </Flex>
          {/* Next Section */}
          <Flex
            width={"100%"}
            flexDirection={["column", "column", "row", "row"]}
            height={["70vh", "100vh", "80vh", "65vh"]}
            gap={3}>
            <Box
              width={["100%", "100%", "60%", "60%"]}
              height={"100%"}
              bg={"#ffffff"}
              padding={4}
              rounded={8}
              boxShadow={"lg"}>
              <Flex width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={20} fontWeight={800}>
                  Employee Status
                </Text>
                <AvatarGroup size='md' max={2}>
                  {employee &&
                    employee.allEmp.map((employee) => (
                      <Avatar
                        key={employee._id}
                        name={employee.fullname}
                        src={employee.profile}
                      />
                    ))}
                </AvatarGroup>
              </Flex>
              <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                  <TableCaption>List of the Latest Employees</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Full Name</Th>
                      <Th>Email</Th>
                      <Th>Gender</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {employee &&
                      employee.latestEmp.map((employee) => (
                        <Tr key={employee._id}>
                          <Td>{employee.fullname}</Td>
                          <Td>{employee.email}</Td>
                          <Td>{employee.gender}</Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Flex
              width={["100%", "100%", "40%", "40%"]}
              height={"100%"}
              bg={"#ffffff"}
              padding={10}
              justifyContent={"center"}
              alignItems={"center"}
              rounded={8}
              boxShadow={"lg"}>
              <Doughnut position={"relative"} translateX={"36px"} data={Data} />
              <Flex
                position={"relative"}
                top={0}
                translateX={"-50%"}
                right={"50%"}
                flexDirection={"column"}
                zIndex={"2000 !important"}
                gap={4}>
                <Flex gap={3} justifyContent={"center"} alignItems={"center"}>
                  <Image
                    borderRadius='full'
                    boxSize='60px'
                    src='https://cdn-icons-png.flaticon.com/512/236/236831.png'
                    alt='Dan Abramov'
                  />
                  <Text
                    fontSize={23}
                    color={"#051724"}
                    fontWeight={900}
                    textAlign={"center"}>
                    {employee && employee.findMale}
                  </Text>
                </Flex>
                <Flex gap={3} justifyContent={"center"} alignItems={"center"}>
                  <Image
                    borderRadius='full'
                    boxSize='60px'
                    src='https://cdn-icons-png.flaticon.com/512/201/201634.png'
                    alt='Dan Abramov'
                  />
                  <Text
                    color={"#051724"}
                    fontSize={23}
                    fontWeight={900}
                    textAlign={"center"}>
                    {employee && employee.findFemale}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
