import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { Component } from "react";
// import { Link, useHistory} from "react-router-dom"

// import { createBrowserHistory } from "history";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nome: "",
      },
    };
    this.dataForm = this.dataForm.bind(this);
  }

  dataForm(e){
    let form= this.state.form;
    form[e.target.name]=e.target.value
    this.setState({ form: form})
  }
  render() {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="red.100" p={12} rounded={6}>
          <Heading mb={6} align="center">
            {" "}
            Treco{" "}
          </Heading>
          <Input placeholder="aurelio@teste.com" variant="filled" mb={3} 
          name="nome" type="text" value={this.state.form.nome} onChange={this.dataForm}/>
          <Input placeholder="*****" variant="filled" mb={6} type="text" />
          {/* <Button colorScheme="teal" onClick={() => handleSubmit}> */}
          <Button colorScheme="teal">Log in</Button>
        </Flex>
      </Flex>
    );
  }
}

export default Home;
