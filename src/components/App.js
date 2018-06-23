import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Authentication, Main } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Auth" component={Authentication} />
      </Switch>
    </div>
  );
};

export default App;