import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import atom from '../styling/atom.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
    boxShadow: '5px 5px #4B7095',
    backgroundColor: '#FAF0E6'
  },
  image: {
    width: 70,
    height: 70,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function LeaderGrid2(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <br></br>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={atom} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container >
             
             <Grid xs={5}>
                 <br></br>
                 <Typography>{props.leader[2]}</Typography>
             </Grid>
            
             <Grid xs={3}>
                 <br></br>
                 <br></br>
                
                 <Typography>Charges: {props.leader[1]} </Typography>
             </Grid>
             <Grid xs={3}>
                 <br></br>
                 <br></br>
                
                <Typography>Feelings Score: {props.leader[0]}</Typography>
             </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
