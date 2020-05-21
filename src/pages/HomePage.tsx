import React from 'react';

import {PageProps} from './types';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import Header from '../components/common/Header';
import BottomNav from 'components/common/BottomNav';
import MobileOnlyTemplate from 'components/templates/MobileOnlyTemplate';

const HomePage:React.FC<PageProps> = (props) => {
  return (
    <MobileOnlyTemplate>
      <Header />
      <BottomNav />
    </MobileOnlyTemplate>

  )
}
export default HomePage;