import React from "react";
import { Grid } from "@material-ui/core";
import TaskItem from "./TaskItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: 30
  },
  taskitem: {
    margin: 15
  }
}));

const Tasks = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction='column'
      justify='center'
      alignItems='center'
      xs={12}
      md={12}
      wrap='nowrap'
      className={classes.spacing}>
      <Grid item className={classes.taskitem}>
        <TaskItem />
      </Grid>
      <Grid item className={classes.taskitem}>
        <TaskItem />
      </Grid>
      <Grid item className={classes.taskitem}>
        <TaskItem />
      </Grid>
    </Grid>
  );
};

export default Tasks;
