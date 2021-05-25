import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import InputItens from "../../components/inputItem";
const Home = () => {
  const produtoStorage = localStorage.getItem("Produtos");
  let produto = [];
  if (produtoStorage) {
    produto = JSON.parse(produtoStorage);
  } else {
    //   produto = ["teste", "teste2"];
  }
  return (
    // <Flex height="100vh" alignItems="center" justifyContent="center">
    //   <Flex direction="column" background="red.100" p={12} rounded={6}>
    //     <Heading mb={6} align="center"> Bem Vindo! </Heading>
    //     <Input placeholder="aurelio@teste.com" variant="filled" mb={3} type="email" />
    //     <Input placeholder="*****" variant="filled" mb={6} type="password" />
    //     {/* <Button colorScheme="teal" onClick={() => handleSubmit}> */}
    //     <Button colorScheme="teal">
    //       Log in
    //     </Button>
    //   </Flex>
    // </Flex>
    <Flex direction="column">
      <Heading align="center" margin="4">
        Inserir Produto
      </Heading>
      <InputItens />
      <Flex alignItems="center" justifyContent="center" margin="4">
        <Flex direction="column" background="red.100" p={130} rounded={12}>
          {/* {produtoStorage} */}
          {produto.map((x: any) => (
            <ul key={x.id}>
              {x.produto} - {x.valor}
            </ul>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
