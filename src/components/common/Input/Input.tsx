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
}
const Input: React.FC<Props> = (props) => {

  return (
    <div className={`Input ${props.className}`} style={props.style}>
      <input value={props.value} type={props.type || 'text'} className={`${props.className}`} onChange={(e) => { props.onChange({ name: props.name, value: e.target.value }) }} />
      {
        props.hasBtn && props.value !== '' ?
          <button onClick={props.btnClick}>
            <Cancel width="16px" />
          </button>
          :
          null
      }

    </div>
  )
}
export default Input;