import React from 'react';

import {PageProps} from './types';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import Header from '../components/common/Header';

const HomePage:React.FC<PageProps> = (props) => {


  return (
    <DefaultTemplate>
      <Header />
    </DefaultTemplate>
  )
}
export default HomePage;