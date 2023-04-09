import {
  Box,
  VStack,
  UnorderedList,
  ListItem,
  Icon,
  Divider,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BiHomeCircle, BiLogOut } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { FiBriefcase } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { MdSettings } from "react-icons/md";
import { SiBuildkite } from "react-icons/si";
import { BsCalendar2Minus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logOut } from "../features/authSlice";
const Sidebar = ({ slide }) => {
  let activeStyle = {
    width: "100%",
    color: "#00bac7",
    transition: "all 2s ease",
    borderRadius: "10px 28px",
    background: "rgba(0,186,199,.12)",
  };

  const dispatch = useDispatch();
  return (
    <VStack
      width={["40%", "40%", "33%", "20%", "242px"]}
      height={"100vh"}
      bg={"#051724"}
      position={"fixed"}
      zIndex={1000}
      transform={slide ? "translateX(309px)" : "translateX(0px)"}
      py={4}
      gap={8}
      px={4}
      top={0}
      left={["-310", "-310", "-380", "-380", 0]}>
      <Box width={"100%"}>
        <Text
          textAlign={"center"}
          fontSize={25}
          fontWeight={800}
          color={"#ffffff"}
          fontFamily={"'Orbitron', sans-serif;"}>
          SCYLLA
        </Text>
      </Box>

      <UnorderedList
        width={"100%"}
        listStyleType={"none"}
        fontSize={"16px"}
        fontWeight={600}
        display={"flex"}
        flexDirection={"column"}
        color={"#ffffff"}>
        <NavLink
          to='/dashboard'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <ListItem
            px={8}
            py={2}
            display={"flex"}
            gap={1}
            rounded={"10px 28px"}>
            <Icon alignSelf={"center"} fontSize={"24px"} as={BiHomeCircle} />
            Overview
          </ListItem>
        </NavLink>
        <NavLink
          to='/payroll'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <ListItem px={8} py={2} display={"flex"} gap={1}>
            <Icon
              alignSelf={"center"}
              fontSize={"24px"}
              as={HiOutlineDocumentText}
            />
            Payroll
          </ListItem>
        </NavLink>
        <NavLink
          to='/employees'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <ListItem px={8} py={2} display={"flex"} gap={1}>
            <Icon alignSelf={"center"} fontSize={"24px"} as={IoIosPeople} />
            Employees
          </ListItem>
        </NavLink>
        <NavLink
          to='/tasks'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <ListItem px={8} py={2} display={"flex"} gap={1}>
            <Icon alignSelf={"center"} fontSize={"24px"} as={GoTasklist} />
            Tasks
          </ListItem>
        </NavLink>
        {/* <NavLink
          to='/attendance'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <ListItem px={8} py={2} display={"flex"} gap={1}>
            <Icon alignSelf={"center"} fontSize={"24px"} as={FiBriefcase} />{" "}
            Attendance
          </ListItem>
        </NavLink> */}
        <NavLink
          to='/department'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <ListItem px={8} py={2} display={"flex"} gap={1}>
            <Icon alignSelf={"center"} fontSize={"24px"} as={SiBuildkite} />
            Departments
          </ListItem>
        </NavLink>
        <NavLink
          to='/leave-request'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <ListItem px={8} py={2} display={"flex"} gap={1}>
            <Icon
              alignSelf={"center"}
              fontSize={"24px"}
              as={BsCalendar2Minus}
            />
            Leave Request
          </ListItem>
        </NavLink>
      </UnorderedList>
      <Divider />
      <UnorderedList
        width={"100%"}
        height={"30%"}
        listStyleType={"none"}
        fontSize={"16px"}
        justifyContent={"space-between"}
        fontWeight={600}
        display={"flex"}
        flexDirection={"column"}
        color={"#ffffff"}>
        <NavLink
          to='/settings'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <ListItem
            px={8}
            py={2}
            display={"flex"}
            gap={1}
            rounded={"10px 28px"}>
            <Icon alignSelf={"center"} fontSize={"24px"} as={MdSettings} />
            Settings
          </ListItem>
        </NavLink>
        <ListItem
          onClick={() => dispatch(logOut())}
          px={8}
          py={2}
          display={"flex"}
          gap={1}
          rounded={"10px 28px"}>
          <Icon alignSelf={"center"} fontSize={"24px"} as={BiLogOut} />
          LogOut
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};

export default Sidebar;
