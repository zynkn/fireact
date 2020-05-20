import React from 'react';
import './Button.scss';

interface ButtonProps{
  [key: string]: any;
}

const Button:React.FC<ButtonProps> = (props) => {
  
  return (
    <button>Button</button>
  )
}