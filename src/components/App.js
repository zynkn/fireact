import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { RootPage, WorkoutPage, AnalysisPage, LoginPage, MyPage } from 'pages';


class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={RootPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/workout" component={WorkoutPage} />
          <Route exact path="/analysis" component={AnalysisPage} />
        </Switch>
      </div>
    );
  }
};

export default App;
