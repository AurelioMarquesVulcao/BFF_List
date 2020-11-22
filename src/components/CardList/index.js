import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// const paginaEmConstrucao =require('../../assets')
// import paginaEmConstrucao from '../../assets/paginaEmConstrucao.png';

// Para usar aqui uso camel case no css.
// para usar no css uso css comum

class CardList extends Component {


  render() {
    return (
      <div>
        <Card>
          <Card.Body>Dados do produto </Card.Body>
          <Button variant="light">Light</Button>
        </Card>
      </div>
    );

  }
}


// function Home() {

// }
export default CardList;
