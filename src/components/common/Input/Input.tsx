import React from 'react';
import './Input.scss';

interface Props {
  className?: string
  type?: string
  onChange?: any
  value?: string | number
  btnClick?: VoidFunction
  hasBtn?: boolean
  style?: any
  name?: string
  onFocus?: any
  disabled?: boolean
}
const Input: React.FC<Props> = (props) => {

  return (
    <div className={`Input ${props.className}`} style={props.style}>
      <input value={props.value} type={props.type || 'text'}
        className={`${!props.disabled && props.className}`}
        onFocus={props.onFocus}
        onChange={props.onChange}
        disabled={props.disabled}
        style={props.children ? { paddingRight: '36px' } : {}}
      />
      {
        props.children && !props.disabled && props.value !== '' ?
          props.children
          :
          null
      }

    </div>
  )
}
export default Input;