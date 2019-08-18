import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
// import Calendar from '../components/Calendar';
// import MiniCalendar from '../components/MiniCalendar';
import WorkoutList from '../components/WorkoutList';
import Calendar from '../components/Calendar';
// import WorkoutModal from '../components/WorkoutModal';

const IndexPage: NextPage = () => {
  
  React.useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      console.log(window.pageYOffset);
    })
  },[])
  return (
    <Layout title="Fire!">
      <br />

      <Calendar />
      <WorkoutList />
      {/* <WorkoutModal /> */}
      <style jsx>
        {`

        `}
      </style>
    </Layout>
  )
}

export default IndexPage
