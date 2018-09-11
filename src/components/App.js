import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Authentication, Main, Info } from 'pages';
import Today from 'pages/Today';

import HeaderContainer from 'containers/HeaderContainer';
import BottomNavigation from 'components/Common/BottomNavigation';
import Calendar from '../pages/Calendar';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/auth" component={Authentication} />
        <Route exact path="/today" component={Today} />
        <Route exact path="/info" component={Info} />
      </Switch>
      <BottomNavigation />
    </div>
  );
};

export default App;