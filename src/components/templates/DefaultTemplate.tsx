import React from 'react';
//import './Template.scss';


interface TemplateProps{
  children?: React.ReactNode;
  [key: string]: any;
}

const DefaultTemplate:React.FC<TemplateProps> = ({ children}) => {

  return (
    <div>
      {children}
    </div>
  )
}

export default DefaultTemplate;