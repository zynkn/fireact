import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import Header from 'components/common/Header';
import { LoginPage, CalendarPage } from 'pages';

class App extends React.Component<any>{

  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={CalendarPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </main>
      </>
    );
  }

}

export default App;
