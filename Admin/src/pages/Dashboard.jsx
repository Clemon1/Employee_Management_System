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
import { useGetAllTaskQuery } from "../features/TaskSlide";

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
  const { data: employee, isError, isLoading } = useCountEmployeeQuery();
  const { data: department } = useGetAllDepartmentQuery();
  const { data: task } = useGetAllTaskQuery();
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
        label: "Number of Employees",
        data: [20, 30, 60, 49, 38, 19],
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
                  <StatLabel fontWeight={700} fontSize={18}>
                    Total Employees
                  </StatLabel>
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
                  <StatLabel fontWeight={700} fontSize={18}>
                    Total Task
                  </StatLabel>
                  <StatNumber fontSize={30} fontWeight={700}>
                    {task && task.countTotalTask}
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
                  <StatLabel fontWeight={700} fontSize={18}>
                    Departments
                  </StatLabel>
                  <StatNumber fontSize={30} fontWeight={700}>
                    {department && department.countDepartment}
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
                  <StatLabel fontWeight={700} fontSize={18}>
                    Leave Request
                  </StatLabel>
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
              <Flex
                position={"relative"}
                top={"-220"}
                width={150}
                left={"90"}
                bottom={0}
                flexDirection={"column"}
                zIndex={"2000 !important"}
                gap={4}
              >
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
                    textAlign={"center"}
                  >
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
                    textAlign={"center"}
                  >
                    {employee && employee.findFemale}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
