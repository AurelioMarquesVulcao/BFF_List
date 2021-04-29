import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Header from './components/header';
import Routes from './routes';
import theme from './theme';

// import { Container } from './styles';

function App() {
  return (
    <ChakraProvider theme={theme}>
     <Header />
     <Routes />
    </ChakraProvider>
  )
}

export default App;