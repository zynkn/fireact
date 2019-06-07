import React from 'react';
import './LoginBtn.scss';
import GOOGLE_ICON from 'assets/svg/google.svg';
import FACEBOOK_ICON from 'assets/svg/facebook_white.svg';


interface Props {
  style?: object
  text: string
  icon: string
  onClick?: VoidFunction
}

const LoginBtn: React.FC<Props> = ({ style, text, icon, onClick }) => {
  return (
    <button className="LoginBtn" style={style} onClick={onClick}>
      {
        icon === "Google" ? <img src={GOOGLE_ICON} alt="GOOGLE_ICON" /> : null
          ||
          icon === "Facebook" ? <img src={FACEBOOK_ICON} alt="FACEBOOK_ICON" /> : null
      }

      {text}
    </button>
  )
}
export default LoginBtn;