import React, { useState } from "react";
import { Grid, Snackbar, makeStyles } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  alert: {
    maxWidth: "100%",
    marginTop: 40,
    paddingRight: 30
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Empty = ({ msg, severity }) => {
  const classes = useStyles();

  return (
    <Grid container item>
      <Grid item>
        <Alert severity={severity} className={classes.alert}>
          {msg}
        </Alert>
      </Grid>
    </Grid>
  );
};

export default Empty;
