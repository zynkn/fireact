import React from 'react';
import './BottomNav.scss';


interface BottomNavProps{
  [key: string]: any;
}

const BottomNav:React.FC<BottomNavProps> = (props) => {

  return (
    <div className={`BottomNav`}>
      BottomNav
    </div>  
  )
}
export default BottomNav;