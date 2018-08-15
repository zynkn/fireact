import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Authentication, Main } from 'pages';
import Today from 'pages/Today';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Auth" component={Authentication} />
        <Route exact path="/today" component={Today} />
      </Switch>
    </div>
  );
};

export default App;