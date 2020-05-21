import React from 'react';
//import './Template.scss';


interface TemplateProps{
  children?: React.ReactNode;
  [key: string]: any;
}

const MobileOnlyTemplate:React.FC<TemplateProps> = ({ children}) => {

  return (
    <main>
      {children}
    </main>
  )
}

export default MobileOnlyTemplate;