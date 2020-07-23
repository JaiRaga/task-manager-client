import React from "react";
import { Grid, Button, makeStyles, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("xs")]: {
    addtask: {
      height: 100,
      width: 125
    }
  },
  [theme.breakpoints.up("sm")]: {
    addtask: {
      height: 150,
      width: 200
    }
  },
  [theme.breakpoints.up("md")]: {
    addtask: {
      height: 200,
      width: 250
    }
  }
}));

const AddTask = () => {
  const classes = useStyles();
  return (
    <Grid container item>
      <Grid item>
        <Tooltip title='Add Task' arrow placement='bottom'>
          <Button className={classes.addtask} variant='contained'>
            <AddIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default AddTask;
