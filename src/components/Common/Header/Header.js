import React, { Component } from 'react';

import { Atom, FirebaseIcon } from 'components/Common/Icons';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';


import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import LoginButton from 'components/Login/LoginButton';
import { GooglePlus, Facebook2 } from 'components/Common/Icons';

import Zoom from '@material-ui/core/Zoom';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    display: 'flex',
    width: '100%',
  };
}

const styles = theme => ({
  flex: {
    flex: 1,
  },
  paper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '16px',

  },
})


class Header extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <FirebaseIcon height="36px" />
          <Atom width="60px" fill="#00d8ff" />
          <Typography variant="title" color="inherit" className={classes.flex}>
            Fireact
          </Typography>
          <IconButton aria-label="login" onClick={this.handleOpen}>
            <AccountCircle style={{ fill: 'white' }} />
          </IconButton >
          <span>Username</span>
        </Toolbar>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Grid style={getModalStyle()} className={classes.paper} xs={10} sm={8} md={2} lg={2}>
            <Typography variant="title" id="modal-title" style={{ marginBottom: '16px' }}>
              Firebase Authentication
            </Typography>
            <LoginButton color="primary" styles={{ backgroundColor: '#DD4B39' }}>
              <GooglePlus width="24px" style={{ marginRight: '12px' }} />Sign up with Google
              </LoginButton>
            <LoginButton color="primary" styles={{ backgroundColor: '#3c5a9a' }}>
              <Facebook2 height="24px" fill="white" style={{ marginRight: '12px' }} />Sign up with Facebook
              </LoginButton>
          </Grid>
        </Modal>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);