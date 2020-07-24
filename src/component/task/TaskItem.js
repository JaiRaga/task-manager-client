import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  taskitem: {
    margin: 15
  },
  paper: {
    margin: 15,
    padding: "25px 45px"
  }
}));

const TaskItem = () => {
  const classes = useStyles();
  return (
    // <Grid item className={classes.taskitem}>
    <Paper className={classes.paper} elevation={4}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis,
      dicta laboriosam suscipit eius voluptatibus deleniti nihil hic a ratione.
    </Paper>
    // </Grid>
  );
};

export default TaskItem;
