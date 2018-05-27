import React from 'react';

import styles from './LoginPane.scss';
import classNames from 'classnames/bind';

import Header from 'components/Common/Header';
import LoginButton from 'components/Login/LoginButton';
import { GooglePlus, Facebook2 } from 'components/Common/Icons';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import teal from '@material-ui/core/colors/teal';

const primary = teal[500];
const secondary = teal[50];




const cx = classNames.bind(styles);

const M_styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    padding: '0px',
  },
});

function LoginPane(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24} justify='center'>
        <Grid item xs={12} sm={10} md={8} lg={6} >
          <Paper className={classes.paper}>
            <Header />
            <section style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <LoginButton color="primary" styles={{ backgroundColor: '#DD4B39' }}>
                <GooglePlus width="24px" style={{ marginRight: '12px' }} />Sign up with Google
              </LoginButton>
              <LoginButton color="primary" styles={{ backgroundColor: '#3c5a9a' }}>
                <Facebook2 height="24px" fill="white" style={{ marginRight: '12px' }} />Sign up with Facebook
              </LoginButton>
            </section>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(M_styles)(LoginPane);