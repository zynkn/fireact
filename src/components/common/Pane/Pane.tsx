import React from 'react';
import './Pane.scss';

interface Props {
  style: object
  children: any
}

const Pane: React.FC<Props> = ({ style, children }) => {
  return (
    <div className="Pane" style={style}>
      {children}
    </div>
  )
};

export default Pane;