import React from 'react';
import './IconBtn.scss';

interface Props {
  icon?: React.ReactNode
  style?: object
  name?: string
  className?: string
  onClick?: VoidFunction
}
const IconBtn: React.FC<Props> = (props) => {

  return (
    <button className={`IconBtn ${props.className || ''}`} style={props.style} onClick={props.onClick}>
      {
        props.icon
      }
    </button>
  )
}

export default IconBtn;