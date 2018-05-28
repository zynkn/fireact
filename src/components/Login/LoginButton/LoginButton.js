import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    textAlign: 'left',
    justifyContent: 'space-between',
  },
  input: {
    display: 'none',
  },
});
function LoginButton(props) {
  const { classes, color, styles, onClick } = props;
  return (
    <Button variant="raised" className={classes.button} color={color} style={styles} onClick={onClick}>
      {props.children}
    </Button>
  );
}



export default withStyles(styles)(LoginButton);