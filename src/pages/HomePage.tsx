import React from 'react';

import {PageProps} from './types';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import Header from '../components/common/Header';
import BottomNav from 'components/common/BottomNav';
import MobileOnlyTemplate from 'components/templates/MobileOnlyTemplate';
import Calendar from 'components/common/Calendar';
import Button from 'components/common/Button';

const HomePage:React.FC<PageProps> = (props) => {
  return (
    <MobileOnlyTemplate>
      <Header />
      <main>
        <Calendar />
        <Button block> Buttttton</Button>
      </main>
      <BottomNav />
    </MobileOnlyTemplate>

  )
}
export default HomePage;