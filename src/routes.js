import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Lista from '../../monitorias/app/src/pages/Monitoria01'
import Home from './pages/home';
import InBuild from './pages/inBuild';
import Header from './components/header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route exact path="/01" component={Lista} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/01" component={InBuild} />
        <Route path="/*" component={InBuild} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;