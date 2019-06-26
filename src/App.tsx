import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/common/Header';
import { LoginPage, CalendarPage, MyPage } from 'pages';
import Footer from 'components/common/Footer';
import { useDispatch } from 'react-redux';


const App = (props: any) => {
  const dispatch = useDispatch();
  // React.useEffect(() => {

  //   console.log('ASYNC_CHECK');
  //   dispatch({ type: 'user/CHECK_ASYNC_TOKEN' });
  // }, []);

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
        props.location.pathname === '/login' ? null : <Footer />
      }
    </>
  )
};

export default App;

// class App extends React.Component<any>{


//   componentDidMount() {
//     console.log('ASYNC_CHECK');
//   }
//   render() {
//     return (

//     );
//   }

// }

// export default App;
