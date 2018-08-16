import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Authentication, Main } from 'pages';
import Today from 'pages/Today';

import HeaderContainer from 'containers/HeaderContainer';
import BottomNavigation from 'components/Common/BottomNavigation';
const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Auth" component={Authentication} />
        <Route exact path="/today" component={Today} />
      </Switch>
      <BottomNavigation />
    </div>
  );
};

export default App;