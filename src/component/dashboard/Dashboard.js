import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import AddTask from "../task/AddTask";
import CreateWorkSpace from "../workspace/CreateWorkSpace";
import Empty from "../task/Empty";
import Tasks from "../task/Tasks";

const useStyles = makeStyles((theme) => ({
  task: {
    width: "50%"
  },
  workspace: {
    width: "50%"
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
          wrap='nowrap'
          direction='column'
          alignItems='center'
          className={classes.spacing}>
          <Grid item>
            <AddTask />
          </Grid>
          <Grid item>
            <Empty severity='info' msg='No Tasks Yet!' />
          </Grid>
          <Grid item>
            <Tasks />
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
          <Grid item>
            <Empty severity='error' msg='No Workspaces!' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
