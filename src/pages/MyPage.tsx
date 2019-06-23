import React from 'react';
import Pane from 'components/common/Pane';
import ListView from 'components/mypage/ListView/ListView';
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom';

const MyPage: React.FC<RouteComponentProps> = (props) => {
  const isLogin: boolean = useSelector((state: any) => state.user.isLogin);
  if (!isLogin) {
    props.history.replace('/login');
  }

  return (
    <Pane className="lg">
      <ListView />
    </Pane>
  )
}

export default MyPage;