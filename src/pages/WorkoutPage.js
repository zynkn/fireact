import React, { Fragment } from 'react';

import WorkoutContainer from 'containers/WorkoutContainer';

import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';

const WorkoutPage = (props) => {
  //console.log(props.history);
  return (
    <Fragment>
      <Header history={props.history} />
      <main>
        <WorkoutContainer history={props.history} />
      </main>
      <BottomNav />
    </Fragment>
  );
};

export default WorkoutPage;