import React from "react";
import { Grid, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  taskitem: {
    // margin: 15
  },
  paper: {
    // margin: 15,
    paddingTop: "25px",
    paddingBottom: "25px",
    paddingLeft: "45px",
    paddingRight: "15px",
    backgroundColor: "#2f2519",
    color: "#f4f6ff"
  }
}));

const TaskItem = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={4}>
      <Grid container wrap='nowrap' item className={classes.taskitem}>
        <Grid item>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis,
          dicta laboriosam suscipit eius voluptatibus deleniti nihil hic a
          ratione.
        </Grid>
        <Grid item>
          <IconButton aria-label='edit/delete' color='inherit'>
            <ArrowDropDownIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TaskItem;
