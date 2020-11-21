import React, { Component } from 'react';
// const paginaEmConstrucao =require('../../assets')
import paginaEmConstrucao from '../../assets/paginaEmConstrucao.png';

class Home extends Component {

  render() {
    return (
      <div>
        <b>teste</b> <hr></hr>
        <img
          alt="Construção"
          src={paginaEmConstrucao}
          Style=" display: block;  margin: 5px auto;  max-width: 100%; min-height:100%;"
        />
      </div>
    );

  }
}


// function Home() {

// }
export default Home;
