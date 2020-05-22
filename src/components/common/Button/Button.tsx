import React from 'react';
import './Button.scss';

interface ButtonProps {
  children?: string | number | React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  block?: boolean;
}
const Button:React.FC<ButtonProps> = ({ children, style, className, onClick, disabled, block}) => {
  
  return (
    <button onClick={onClick} style={style} disabled={disabled} className={`Button ${block? '--block' : ''} ${className}`}>
      {children}
    </button>
  )
}

export default Button;