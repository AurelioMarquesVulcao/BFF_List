import React, { Component } from 'react';
const Dados = require('../../assets/Teste01.json');


class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = Dados;


  }
  // montagem dos dados
  async componentDidMount() {
    try {
      let url = 'http://172.16.16.38:3304/monitoria01';

      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          let state = this.state;
          state = json;
          this.setState(state);
        })

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let qt = 0;
    return (
      <div>
        <h1>Monitoria Comarcas:</h1>
        <h3>Comarcas a mais de 7 dias sem novos processos</h3>
        <table class="table table-striped">
          <thead>
            <tr >
              <th scope="col">#</th>
              <th scope="col">Numero</th>
              <th scope="col">Data distribuição</th>
              <th scope="col">Data Atualização</th>
              <th scope="col">Status</th>
              <th scope="col">Estado</th>
              <th scope="col">Comarca</th>
            </tr>
          </thead>
          {this.state.log.map((res) => {
            qt++;
            if (res.status == "Novo") {
              return (
                <tbody>
                  <tr class="danger">
                    <th scope="row">{qt}</th>
                    <td>{res.numero}</td>
                    <td>{res.dataDistribuicao}</td>
                    <td>{res.dataUltimaVerificacao}</td>
                    <td>{res.status}</td>
                    <td>{res.estado}</td>
                    <td>{res.comarca}</td>
                  </tr>
                </tbody>
              );
            } else if (res.status == "Atualizado") {
              return (
                <tbody>
                  <tr class="warning">
                    <th scope="row">{qt}</th>
                    <td>{res.numero}</td>
                    <td>{res.dataDistribuicao}</td>
                    <td>{res.dataUltimaVerificacao}</td>
                    <td>{res.status}</td>
                    <td>{res.estado}</td>
                    <td>{res.comarca}</td>
                  </tr>
                </tbody>
              );
            } else {
              return (
                <tbody>
                  <tr class="Light">
                    <th scope="row">{qt}</th>
                    <td>{res.numero}</td>
                    <td>{res.dataDistribuicao}</td>
                    <td>{res.dataUltimaVerificacao}</td>
                    <td>{res.status}</td>
                    <td>{res.estado}</td>
                    <td>{res.comarca}</td>
                  </tr>
                </tbody>
              );
            }
          })}
        </table>
      </div>
    );

  }
}
export default Lista;
