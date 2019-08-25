import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import WorkoutList from '../components/WorkoutList';


const IndexPage: NextPage = () => {
  
  React.useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      console.log(window.pageYOffset);
    })
  },[])
  return (
    <Layout title="Fire!">
      <WorkoutList />
      <style jsx>
        {`

        `}
      </style>
    </Layout>
  )
}

export default IndexPage
