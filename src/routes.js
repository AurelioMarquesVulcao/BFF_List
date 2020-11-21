import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Lista from '../../monitorias/app/src/pages/Monitoria01'
import Home from './pages/home';

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Route exact path="/01" component={Lista} /> */}
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default Routes;