import React from 'react';
import Layout from '../components/Layout';
import {NextPage} from 'next';
import Calendar from '../components/Calendar';
import WorkoutList from '../components/WorkoutList';


const CalendarPage: NextPage = () => {

  return (
    <Layout title="Calendar!">
      <Calendar />
      {/* <WorkoutList /> */}
    </Layout>
  )
}

export default CalendarPage;