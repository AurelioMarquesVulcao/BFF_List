import React from 'react';
import { Stack, Text, Link } from '@chakra-ui/react'

function Header() {
  return (
    <Stack as="nav" 
    spacing={3} 
    w={"100%"}
    pt={"5"} pb={5} 
    bg={"gray.600"} 
    justify='center' 
    align='center'>
      <Stack
        spacing={2}
        w={"80%"}
        h={"9"}
        margin={"0 auto"}
        justify="space-between"
        direction="row"
        align="center"

      >
        <Text
          color="white"
          fontWeight="extrabold"
          fontSize="2xl"
        >
          Lista de Compras
       </Text>
        <Stack justifyContent="space-between" align={"center"}>
            <Link 
            colorScheme="whiteAlpha"
            textColor="white" textDecor="none" _hover={
              {
                textDecor: 'none',
                textColor: 'gray.100'
              }
            } fontSize="large" href="#"> 
              Cadastrar Produto
            </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Header;










