import React from 'react';
import './Template.scss';


interface TemplateProps{
  children?: React.ReactNode;
  [key: string]: any;
}

const MobileOnlyTemplate:React.FC<TemplateProps> = ({ children}) => {

  return (
    <div className="Template --mobileOnly">
      {children}
    </div>
  )
}

export default MobileOnlyTemplate;