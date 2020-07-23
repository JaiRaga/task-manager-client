import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import AddTask from "../task/AddTask";
import CreateWorkSpace from "../workspace/CreateWorkSpace";

const useStyles = makeStyles((theme) => ({
  task: {
    height: "100vh",
    width: "50%",
    backgroundColor: "#f7fbe1"
  },
  workspace: {
    height: "100vh",
    width: "50%",
    backgroundColor: "#4cbbb9"
  },
  spacing: {
    padding: 10
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item className={classes.task}>
        <Grid
          container
          item
          direction='column'
          alignItems='center'
          className={classes.spacing}>
          <Grid item>
            <AddTask />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.workspace}>
        <Grid
          container
          item
          direction='column'
          alignItems='center'
          className={classes.spacing}>
          <Grid item>
            <CreateWorkSpace />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
