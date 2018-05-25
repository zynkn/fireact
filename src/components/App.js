import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, NotFoundPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
};

export default App;