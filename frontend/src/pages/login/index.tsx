import { Button, Flex, Heading, Input } from "@chakra-ui/react";
// import React from "react";
import { Link, useHistory } from "react-router-dom"

const LoginPage = () => {
  // const history = useHistory
  // const api = () => {
  //   return new Promise((resolve,reject) => {
  //      setTimeout(() => {
  //        reoslve("OK")
    //},5000);
  //}
  //const handleSubmit = () => {
    //  api().then((resolve) => {
      //    history.push("/home")
      //})
   // }
  return(
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <Flex direction="column" background="red.100" p={12} rounded={6}>
      <Heading mb={6} align="center"> Bem Vindo! </Heading>
      <Input placeholder="aurelio@teste.com" variant="filled" mb={3} type="email" />
      <Input placeholder="*****" variant="filled" mb={6} type="password" />
      {/* <Button colorScheme="teal" onClick={() => handleSubmit}> */}
      <Button colorScheme="teal" >
        Log in
      </Button>
    </Flex>
  </Flex>
)};

export default LoginPage;
