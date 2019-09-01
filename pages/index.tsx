import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import WorkoutList from '../components/WorkoutList';
import Calendar from '../components/Calendar';
import WorkoutAddModal from '../components/WorkoutAddModal';


const IndexPage: NextPage = () => {

  React.useEffect(() => {
    window.addEventListener('load',function() {
      console.log("SCROLL")
      setTimeout(function(){
          // This hides the address bar:
          window.scrollTo(0, 1);
          console.log("SCROLL")
      }, 0)
  });
    // window.addEventListener('scroll', () => {
    //   console.log(window.pageYOffset);
    // })
  }, [])
  return (
    <Layout title="Fire!">
      <h1>index</h1>
      {/* <Calendar /> */}
      {/* <WorkoutAddModal /> */}
      {/* <WorkoutList /> */}

      <style jsx>
        {`

        `}
      </style>
    </Layout>
  )
}

export default IndexPage
