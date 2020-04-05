import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "#FFED87"
  },
  paper1: {
      position: 'absolute', 
      left: '350px',
      width: '50vw',
      height: '80vh',
      backgroundColor: "#122C34",
      overflow: 'auto',
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "#63E2C6"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper className={classes.paper1}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>These are the Protons! Keep up the Positive Charge!</Paper>
        </Grid>
      </Grid>
        <br></br>
        <Grid container space={0}>
            <Grid item xs={6}>
                <Paper className={classes.paper2}>Username!</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
        <br></br>
        <Grid container space={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>Username!</Paper>
          </Grid>
          <Grid item xs={3}>
                <Paper className={classes.paper}>Charges:</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper2}>Feelings:</Paper>
            </Grid>
        </Grid>
      </Paper>
    </div>
  );
}