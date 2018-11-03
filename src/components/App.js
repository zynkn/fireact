import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { RootPage, HistoryPage, AnalysisPage } from 'pages';
import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={RootPage} />
        <Route exact path="/history" component={HistoryPage} />
        <Route exact path="/analysis" component={AnalysisPage} />
      </Switch>
      <BottomNav />
    </Fragment>
  );
};

export default App;