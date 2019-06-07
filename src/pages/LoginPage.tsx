import React from 'react';
import Pane from 'components/common/Pane';
import LoginBtn from 'components/login/LoginBtn';
import { signInGoogle } from 'api/Firebase/authentication';
const LoginPage: React.FC = () => {

  return (
    <Pane className="sm" >
      <h2 className="pane-title" style={{ color: '#F76304', textAlign: 'center' }}>Login</h2>
      <LoginBtn onClick={signInGoogle} text="Sign up with Google" icon="Google" />
      <LoginBtn text="Sign up with Facebook" icon="Facebook"
        style={{ backgroundColor: '#3C5A99', borderColor: '#3C5A99', color: 'white' }} />
    </Pane>
  )
}
export default LoginPage;