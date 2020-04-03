import React from 'react'
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import atom from '../styling/atom.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: '#FFED87',
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
    height: '50vh',
    boxShadow: '5px 10px #888888'

  },
  message: {
    // color: '#FFFFFF',
    backgroundColor: '#122C34',
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    height: '20vh'
  },
  text: {
      color: '#FFFFFF',
      backgroundColor: '#D3D3D3'
  }
 
}));
export default function MessageBoard() {
    const classes = useStyles();

    
        return(
            
            <div>
                <Paper className={classes.paper} elevation={20}>
                    <h1>Please Write Something Positive to Share with a Stranger!</h1>
                    <Paper className={classes.message}>
                        
                        <TextField className={classes.text}fullWidth multiline/>
                    </Paper>
                </Paper>
    
            </div>
        )
    }
  


