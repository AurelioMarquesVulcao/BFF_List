import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Lista from '../../monitorias/app/src/pages/Monitoria01'
import Home from './pages/home';
import InBuild from './pages/inBuild';
import Header from './components/header';
import RegistrationList from './pages/registrationList';
const css={
  "backgroundColor":"#808080",
  // maxHeight:"1200px",
  // height:"1080px",
};

const Routes = () => {
  return (
    <div style={css}>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route exact path="/01" component={Lista} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/01" component={InBuild} />
          <Route exact path="/list" component={RegistrationList} />
          <Route path="/*" component={InBuild} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default Routes;