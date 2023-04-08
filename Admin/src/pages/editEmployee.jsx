import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Image,
  Select,
  Icon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useAddEmployeeMutation } from "../features/employeeSlice";
import { useGetAllDepartmentQuery } from "../features/departmentSlice";
import { FcAddImage } from "react-icons/fc";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Edit_Employee = () => {
  const { data: depth } = useGetAllDepartmentQuery();
  const [addEmployee] = useAddEmployeeMutation();
  const [profile, setProfile] = useState(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [department, setSetDepartment] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const body = {
    fullname,
    email,
    profile,
    gender,
    phoneNumber,
    department,
    password,
  };

  const handleChange = (e) => {
    setProfile(e.target.files ? e.target.files[0] : null);
  };
  // const reader = new FileReader();
  // reader.onload = () => {
  //   setProfile(e.target.result);
  // };
  // reader.readAsDataURL(e.target.files[0]);
  console.log(body);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(body)) {
        formData.append(key, value);
      }
      console.log(formData);
      console.log(body);
      await addEmployee(formData);
      navigate("/employees");
      console.log(addEmployee);
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
          <form onSubmit={handleSubmit}>
            <Box
              width={"100%"}
              height='100%'
              rounded={5}
              bg={"#ffffff"}
              padding={5}>
              <Text fontWeight={700} fontSize='25'>
                Create Employee
              </Text>
              <Flex
                width={"100%"}
                justifyContent={"flex-start"}
                alignItems={"end"}
                marginBottom={3}>
                <Box>
                  <FormLabel fontSize={18}>Profile Picture</FormLabel>
                  <Image
                    borderRadius='full'
                    boxSize='150px'
                    objectFit={"cover"}
                    src={
                      !profile
                        ? "https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                        : URL.createObjectURL(profile)
                    }
                    alt='Profile picture'
                  />
                </Box>
                <FormControl width={"fit-content"}>
                  <FormLabel htmlFor='Profile'>
                    <Icon as={FcAddImage} width={50} height={50} />
                    <Input
                      display={"none"}
                      id='Profile'
                      border={"2px #051724 solid !important"}
                      onChange={handleChange}
                      type='file'
                    />
                  </FormLabel>
                </FormControl>
              </Flex>

              <Flex width={"100%"} gap={5} marginBottom={3}>
                <FormControl>
                  <FormLabel fontSize={18}>Full Name</FormLabel>
                  <Input
                    onChange={(e) => setFullname(e.target.value)}
                    border={"2px #051724 solid !important"}
                    fontWeight={600}
                    type='text'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={18}>Email Address</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    border={"2px #051724 solid !important"}
                    fontWeight={600}
                    type='email'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={18}>Gender</FormLabel>
                  <Select
                    fontWeight={600}
                    onChange={(e) => setGender(e.target.value)}
                    border={"2px #051724 solid !important"}
                    placeholder='Select your gender'>
                    <option fontWeight={600} value='Male'>
                      Male
                    </option>
                    <option fontWeight={600} value='Female'>
                      Female
                    </option>
                  </Select>
                </FormControl>
              </Flex>

              <Flex width={"100%"} gap={5} marginBottom={5}>
                <FormControl>
                  <FormLabel fontSize={18}>Department</FormLabel>
                  <Select
                    fontWeight={600}
                    onChange={(e) => setSetDepartment(e.target.value)}
                    border={"2px #051724 solid !important"}
                    placeholder='Select employee department'>
                    {depth &&
                      depth.departmentAll.map((dept) => (
                        <option
                          key={dept._id}
                          fontWeight={600}
                          value={dept._id}>
                          {dept.name}
                        </option>
                      ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={18}>Phone Number</FormLabel>
                  <Input
                    fontWeight={600}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    border={"2px #051724 solid !important"}
                    type='text'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={18}>Password</FormLabel>
                  <Input
                    fontWeight={600}
                    onChange={(e) => setPassword(e.target.value)}
                    border={"2px #051724 solid !important"}
                    type='password'
                  />
                </FormControl>
              </Flex>
              <Button
                bg={"#051724"}
                color={"#ffffff"}
                width={140}
                type='submit'
                _hover={{
                  color: "#051724",
                  background: "#f4f4f4",
                  border: "2px #051724 solid",
                  fontWeight: 700,
                }}>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Edit_Employee;
