import React from 'react';
import './Pane.scss';

interface Props {
  className?: string
  style?: object
  children: React.ReactNode
}

const Pane: React.FC<Props> = ({ className, style, children }) => {
  return (
    <div className={`Pane ${className}`} style={style}>
      {children}
    </div>
  )
};

export default Pane;