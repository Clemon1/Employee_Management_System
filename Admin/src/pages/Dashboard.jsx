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
  AvatarBadge,
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
const Dashboard = () => {
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
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: [12, 19, 3, 5, 2, 3, 8],
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
        data: [48, 19],
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
  const { data: employee, isError, isLoading } = useCountEmployeeQuery();

  console.log(employee);
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
        <Box width={"100%"} height={"fit-content"} padding={5}>
          <Flex width={"100%"} height={"45vh"} paddingBottom={8}>
            <Flex width={"100%"} flexWrap={"wrap"} gap={2} height={"100%"}>
              <Flex
                width={"48%"}
                height={"49%"}
                bg={"#ffffff"}
                padding={4}
                alignItems={"center"}
                boxShadow={"md"}
                rounded={8}
              >
                <Stat color={"#051724"}>
                  <StatLabel fontSize={18}>Total Employees</StatLabel>
                  <StatNumber fontSize={30} fontWeight={700}>
                    {employee && employee.countEmp}
                  </StatNumber>
                  <StatHelpText fontSize={16}>Employees</StatHelpText>
                </Stat>
                <Box
                  borderRadius={"100%"}
                  height={"9vh"}
                  padding={4}
                  bg={"#051724"}
                  color={"rgb(0, 186, 199)"}
                >
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={BsPeopleFill}
                  />
                </Box>
              </Flex>
              <Flex
                width={"48%"}
                height={"49%"}
                rounded={8}
                bg={"#ffffff"}
                padding={4}
                alignItems={"center"}
                boxShadow={"md"}
              >
                <Stat color={"#051724"}>
                  <StatLabel fontSize={18}>Total Task</StatLabel>
                  <StatNumber fontSize={30} fontWeight={700}>
                    58
                  </StatNumber>
                  <StatHelpText fontSize={16}>Assigned Tasks</StatHelpText>
                </Stat>
                <Box
                  borderRadius={"100%"}
                  height={"9vh"}
                  padding={4}
                  bg={"#051724"}
                  color={"rgb(0, 186, 199)"}
                >
                  <Icon alignSelf={"center"} fontSize={"24px"} as={BiTask} />
                </Box>
              </Flex>
              <Flex
                width={"48%"}
                height={"49%"}
                bg={"#ffffff"}
                rounded={8}
                padding={4}
                alignItems={"center"}
                boxShadow={"md"}
              >
                <Stat color={"#051724"}>
                  <StatLabel fontSize={18}>Departments</StatLabel>
                  <StatNumber fontSize={30} fontWeight={700}>
                    8
                  </StatNumber>
                  <StatHelpText fontSize={16}>Total Department</StatHelpText>
                </Stat>
                <Box
                  borderRadius={"100%"}
                  height={"9vh"}
                  padding={4}
                  bg={"#051724"}
                  color={"rgb(0, 186, 199)"}
                >
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={RiBuilding2Fill}
                  />
                </Box>
              </Flex>
              <Flex
                width={"48%"}
                height={"49%"}
                rounded={8}
                bg={"#ffffff"}
                padding={4}
                alignItems={"center"}
                boxShadow={"md"}
              >
                <Stat color={"#051724"}>
                  <StatLabel fontSize={18}>Leave Request</StatLabel>
                  <StatNumber fontSize={30} fontWeight={700}>
                    19
                  </StatNumber>
                  <StatHelpText fontSize={16}>Employee leave</StatHelpText>
                </Stat>
                <Box
                  borderRadius={"100%"}
                  height={"9vh"}
                  padding={4}
                  bg={"#051724"}
                  color={"rgb(0, 186, 199)"}
                >
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={MdTimeToLeave}
                  />
                </Box>
              </Flex>
            </Flex>
            <Box
              width={"100%"}
              height={"100%"}
              rounded={8}
              bg={"#ffffff"}
              padding={4}
            >
              <Line options={options} data={data} />
            </Box>
          </Flex>
          {/* Next Section */}
          <Flex width={"100%"} height={"65vh"} gap={3}>
            <Box
              width={"60%"}
              height={"100%"}
              bg={"#ffffff"}
              padding={4}
              rounded={8}
              boxShadow={"lg"}
            >
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
                      <Th>department</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {employee &&
                      employee.latestEmp.map((employee) => (
                        <Tr key={employee._id}>
                          <Td>{employee.fullname}</Td>
                          <Td>{employee.email}</Td>
                          <Td>Ether-Blockchain</Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box
              width={"40%"}
              height={"100%"}
              bg={"#ffffff"}
              padding={8}
              rounded={8}
              boxShadow={"lg"}
            >
              <Doughnut data={Data} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
