import React, { Component } from 'react';
import Routes from './routes';
import './assets/bootstrap-4.1.3/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
// import './App.css';
// import { Button } from 'react-bootstrap';




// function App() {
//   return (
//     <div className="App">
//       <div class="">

//       <div class="row alert alert-primary justify-content-between" role="alert">
//         Teste de um belo card
//         <Button variant="primary">Primary</Button>{' '}
//       </div>

//       </div>

//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
