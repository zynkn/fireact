import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Calendar from '../components/Calendar';
import CalendarGraph from '../components/CalendarGraph';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Fire!">
      <br />
      <Calendar />
      <CalendarGraph />
      <style jsx>
        {`

        `}
      </style>
    </Layout>
  )
}

export default IndexPage
