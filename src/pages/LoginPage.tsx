import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import Pane from 'components/common/Pane';
import LoginBtn from 'components/login/LoginBtn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from 'stores/modules';
import { UserState, loginGoogle } from 'stores/modules/user';

interface Props extends RouteComponentProps {
  isLogin: boolean,
  loginGoogle: VoidFunction
}
class LoginPage extends React.Component<Props> {

  componentDidUpdate() {
    if (this.props.isLogin) {
      this.props.history.replace('/')
    }
  }
  render() {
    const { props } = this;
    console.log(props);
    return (
      <Pane className="sm" >
        <h2 className="pane-title" style={{ color: '#F76304', textAlign: 'center' }}>Login</h2>
        <LoginBtn onClick={props.loginGoogle} text="Sign up with Google" icon="Google" />
        <LoginBtn text="Sign up with Facebook" icon="Facebook"
          style={{ backgroundColor: '#3C5A99', borderColor: '#3C5A99', color: 'white' }} />
      </Pane>
    )
  }

}
export default connect(
  ({ user }: StoreState) => ({
    isLogin: user.isLogin,
  }),
  (dispatch) => ({
    loginGoogle: bindActionCreators(loginGoogle, dispatch),
  })
)(LoginPage);