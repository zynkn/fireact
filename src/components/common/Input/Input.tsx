import React from 'react';
import './Input.scss';
import { Cancel } from 'components/common/Icons';
import IconBtn from 'components/common/IconBtn';

interface Props {
  className?: string
  type?: string
  onChange?: any
  value?: any
  btnClick?: any
  hasBtn?: boolean
  style?: any
  name?: string
  onFocus?: any
}
const Input: React.FC<Props> = (props) => {

  return (
    <div className={`Input ${props.className}`} style={props.style}>
      <input value={props.value} type={props.type || 'text'}
        className={`${props.className}`}
        onFocus={props.onFocus}
        onChange={props.onChange}
        style={props.children ? { paddingRight: '36px' } : {}}
      />
      {
        props.children && props.value !== '' ?
          props.children
          :
          null
      }

    </div>
  )
}
export default Input;