import React, { ReactComponentElement, ReactElement, useState } from 'react';
import './ListView.scss';
import { ArrowRight } from 'components/common/Icons';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6

import GenderModal from 'components/common/Modal/GenderModal';
const ListView: React.FC = () => {
  return (
    <div className="ListView">
      <div className="ListItem">
        <span className="title">Personal Information</span>
      </div>
      <ListItem text="성별" value="남성" modal={<GenderModal />} />
      <ListItem text="무게" value="70.4kg" />
      <ListItem text="생년월일" value="1992년 11월" />
      <div className="ListItem">
        <span className="title">Workout</span>
      </div>
      <ListItem text="무게 단위" value="kg" />
      <div className="ListItem">
        <span className="title">Application</span>
      </div>
      <ListItem text="동기화" value="6월 10일 5:46PM" />
      <ListItem text="언어" value="한국어" />
      <ListItem text="버전" value="0.0.1" />
      <ListItem text="로그아웃" value="Google" />
    </div>
  )
}


interface Props {
  text: string,
  value: string,
  modal?: ReactElement
}
const ListItem: React.FC<Props> = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="ListItem">
        <span className="text">{props.text}</span>
        <span className="value" onClick={handleClick}>
          {props.value}
          <ArrowRight width="20px" style={{ marginLeft: '16px' }} />
        </span>
      </div>
      <ModalWrapper isOpen={isOpen} toggle={handleClick}>
        {props.modal}
      </ModalWrapper>
    </>
  )
}


const ModalWrapper: React.FC<any> = ({ children, isOpen, toggle }: any) => {
  const injected = React.Children.map(children, child => React.cloneElement(child, { toggle }))
  if (!isOpen) {
    return (
      <ReactTransitionGroup
        transitionName={'anim'}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
      </ReactTransitionGroup>
    )

  }
  return (
    <ReactTransitionGroup
      transitionName={'anim'}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    >
      {injected}
    </ReactTransitionGroup>
  )
}
export default ListView;