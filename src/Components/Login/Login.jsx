import {
  Container,
  Card,
  CardBody,
  Text,
  Avatar,
  CardHeader,
  Box,
  HStack,
  Heading,
  Stack,
} from "@chakra-ui/react";
import "./Login.css"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContextProvider";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [phoneNo, setPhoneNo] = useState('')
  const [phoneErr, setPhoneErr] = useState(false)
  const navigate = useNavigate();
  const handelLogin = () => {
    if (phoneNo.length === 10) {
      setUser(phoneNo);
      navigate('/');
    } else {
      setPhoneErr(true);
    }
  }
  return (
    <>
      <Container maxW="35%" mt={3}>
        <Stack maxW={"full"}>
          <Card
            direction={"row"}
            alignItems={"center"}
            borderRadius={"0px"}
            bg={"white"}
            color={"black"}
          >
            <CardHeader>
              <Avatar
                size="xl"
                name="Segun Adebayo"
                src="	https://img1.junaroad.com/assets/images/mobileNotif/1526210608201.jpg"
              />
            </CardHeader>
            <CardBody direction="column">
              <HStack w={"200px"} p={2} borderBottom={"1px solid gray"}>
                <Avatar
                  size="xs"
                  name="Segun Adebayo"
                  src="https://img1.junaroad.com/assets/images/mobileNotif/1525951378657.jpg"
                />
                <Heading fontWeight={400} fontSize={"1.5rem"}>SIGN IN</Heading>
              </HStack>
              <Text fontSize="md" mt={"10px"}>sign in to proceed further</Text>
            </CardBody>
          </Card>
          <Box>
            {/* <Floating_Input_Lebel /> */}
          </Box>
        </Stack>
      </Container>
      <Container maxW="35%" mt={3}>
        <label htmlFor="phone" style={{ color: "gray", fontWeight: "600", fontSize: "0.7rem" }}>Mobile Number</label>
        <input type="tel" id="phone" maxLength={10} onChange={(e) => { setPhoneNo(e.target.value) }} />
        {phoneErr && <p id="err">10 Digit Valid Mobile No. Required</p>}
        <button id="next" onClick={handelLogin}>NEXT</button>
      </Container>
    </>
  );
};

export default Login;