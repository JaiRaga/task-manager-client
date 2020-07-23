import React from "react";
import { Grid, Button, makeStyles, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("xs")]: {
    workspace: {
      height: 100,
      width: 125
    }
  },
  [theme.breakpoints.up("sm")]: {
    workspace: {
      height: 150,
      width: 200
    }
  },
  [theme.breakpoints.up("md")]: {
    workspace: {
      height: 200,
      width: 250
    }
  }
}));

const CreateWorkSpace = () => {
  const classes = useStyles();
  return (
    <Grid container item>
      <Grid item>
        <Tooltip title='Create Workspace' arrow placement='bottom'>
          <Button className={classes.workspace} variant='contained'>
            <AddIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default CreateWorkSpace;
