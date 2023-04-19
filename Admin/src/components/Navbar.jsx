import {
  VStack,
  UnorderedList,
  ListItem,
  Icon,
  Divider,
  Box,
  HStack,
  Input,
  Button,
  Text,
  Avatar,
  Flex,
  Switch,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
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
const Navbar = () => {
  const User = useSelector((state) => state.auth.User);
  const [key, setKey] = useState("");
  const [slide, setSlide] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  let activeStyle = {
    width: "100%",
    color: "#00bac7",
    transition: "all 2s ease",
    borderRadius: "10px 28px",
    background: "rgba(0,186,199,.12)",
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${key}`);
  };

  return (
    <HStack
      width={"100%"}
      height={"10vh"}
      position={"sticky"}
      top={0}
      bg={"#ffffff"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={8}
      px={5}
      zIndex={100}
      boxShadow={"lg"}
      py={4}>
      <Button
        ref={btnRef}
        onClick={onOpen}
        display={["block", "block", "block", "block", "none"]}>
        =
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <VStack
            width={"100%"}
            height={"100vh"}
            bg={"#051724"}
            position={"fixed"}
            zIndex={1000}
            transform={slide ? "translateX(309px)" : "translateX(0px)"}
            py={4}
            gap={8}
            px={4}
            top={0}
            left={0}>
            <Flex
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}>
              <Text
                textAlign={"center"}
                fontSize={25}
                fontWeight={800}
                color={"#ffffff"}
                fontFamily={"'Orbitron', sans-serif;"}>
                SCYLLA
              </Text>
              <DrawerCloseButton
                bg={"#ffffff"}
                position={"relative"}
                top={0}
                left={"55px"}
              />
            </Flex>

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
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={BiHomeCircle}
                  />
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
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={IoIosPeople}
                  />
                  Employees
                </ListItem>
              </NavLink>
              <NavLink
                to='/tasks'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <ListItem px={8} py={2} display={"flex"} gap={1}>
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={GoTasklist}
                  />
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
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={SiBuildkite}
                  />
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
                  <Icon
                    alignSelf={"center"}
                    fontSize={"24px"}
                    as={MdSettings}
                  />
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
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Flex width={["78%", "76%", "80%", "80%", "70%"]}>
        <form onSubmit={handleSearch}>
          <HStack
            width={["16rem", "20rem", "29rem", "30rem", "42rem"]}
            border={"none"}
            borderRadius={22}
            spacing={0}>
            <Input
              placeholder='Search Employees'
              fontWeight={600}
              height={"48px"}
              borderRadius={"22px 0px 0px 22px "}
              width={"100%"}
              border='2px #051724 solid!important'
              _focus={{ border: "0px #051724 solid" }}
              outline={"none !important"}
              focusBorderColor='none!important'
              onChange={(e) => setKey(e.target.value)}
            />
            <Button
              padding={"22px 19px"}
              border='2px #051724 solid!important'
              borderRadius={"0px 22px 22px 0px"}
              variant={"ghost"}
              bg={"#051724"}
              _hover={{ background: "#051724" }}
              color={"#ffffff"}
              type='submit'>
              <Icon as={BiSearch} fontSize={25} />
            </Button>
          </HStack>
        </form>
      </Flex>
      <Flex
        width={"30%"}
        gap={8}
        alignItems={"center"}
        display={["none", "none", "none", "none", "flex"]}>
        <Flex gap={4} alignItems={"center"}>
          {User && (
            <>
              <Avatar name={User.user.fullname} src={User.user.profile} />
              <Text fontSize={17} fontWeight={600}>
                {User.user.fullname}
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </HStack>
  );
};

export default Navbar;
