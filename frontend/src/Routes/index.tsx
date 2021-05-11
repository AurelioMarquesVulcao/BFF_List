 
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from "../pages/login";
import Home from "../pages/home";
// import InBuild from './pages/inBuild';
// import RegistrationList from './pages/registrationList';
const Routes = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/01" component={InBuild} />
          <Route exact path="/list" component={RegistrationList} />
          <Route path="/*" component={InBuild} /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;