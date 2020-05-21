import React from 'react';

import {PageProps} from './types';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import Header from '../components/common/Header';
import BottomNav from 'components/common/BottomNav';

const HomePage:React.FC<PageProps> = (props) => {
  return (
    <DefaultTemplate>
      <Header />
      <BottomNav />
    </DefaultTemplate>
  )
}
export default HomePage;