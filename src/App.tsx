import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import Header from 'components/common/Header';
import { LoginPage } from 'pages';

class App extends React.Component<any>{

  render() {
    console.log(this.props);
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </main>
      </>
    );
  }

}

export default App;
