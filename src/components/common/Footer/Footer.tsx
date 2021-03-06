import React from 'react';
import './Footer.scss';
import { Calendar } from 'components/common/Icons';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const renderCount = React.useRef(0);
  console.log('<Header />', ++renderCount.current)
  return (
    <footer>
      <NavLink to="/workout" className="tab">
        <Calendar width={'24px'} fill='#fff' />
      </NavLink>
    </footer>
  )
}

export default Footer;