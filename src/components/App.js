import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import storage from 'lib/storage';
import * as actions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootPage, WorkoutPage, AnalysisPage, LoginPage, MyPage } from 'pages';


class App extends React.Component {

  componentDidMount(){
    console.log('componentDidMount');

  }
  render() {
    return (
      <div>
          <Route exact path="/" component={RootPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/workout" component={WorkoutPage} />
          <Route exact path="/analysis" component={AnalysisPage} />
      </div>
    );
  }
};

export default App;
// export default connect(
//   null,
//   (dispatch) => ({
//     Actions: bindActionCreators(actions, dispatch)
//   })
// )(App);