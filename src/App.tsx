import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/common/Header';
import { LoginPage, CalendarPage, MyPage } from 'pages';
import Footer from 'components/common/Footer';


class App extends React.Component<any>{


  componentDidMount() {

  }
  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/workout" component={CalendarPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/mypage" component={MyPage} />
          </Switch>
        </main>
        {
          this.props.location.pathname === '/login' ? null : <Footer />
        }
      </>
    );
  }

}

export default App;
