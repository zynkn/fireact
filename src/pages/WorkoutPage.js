import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import storage from 'lib/storage';

import WorkoutContainer from 'containers/WorkoutContainer';

import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';

const WorkoutPage = (props) => {
  return (
    <Fragment>
      <Header history={props.history} />
      <main>
        {storage.get('user') ? <WorkoutContainer history={props.history} /> : <Redirect to='/login' />}
      </main>
      <BottomNav />
    </Fragment>
  );
};

export default WorkoutPage;