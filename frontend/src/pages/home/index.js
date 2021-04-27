import React, { Component } from 'react';
// const paginaEmConstrucao =require('../../assets')
import paginaEmConstrucao from '../../assets/paginaEmConstrucao.png';
const divStyle = {
  display: "block",
  margin: "5px auto",
  "maxWidth": "100%",
  "minHeight": "100%",
  padding: "10px"
};

class Home extends Component {


  render() {
    return (
      <div>
        <img
          alt="Construção"
          src={paginaEmConstrucao}
          style={divStyle}
        />
      </div>
    );

  }
}


// function Home() {

// }
export default Home;
