import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import positive from '../styling/positive.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
    boxShadow: '5px 5px #4B7095',
    backgroundColor: '#FEDAF2'
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: '0',
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
              <img className={classes.img} alt="complex" src={positive} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container >
             
             <Grid xs={5}>
                <br></br>
                 <Typography style={{fontFamily: 'Noto Sans' + "sans-serif", fontSize: '40px', fontStyle: 'italic', marginTop: '10px'}}>{props.leader[2]}</Typography>
             </Grid>
            
             <Grid xs={3}>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                
                 <Typography style={{fontFamily: 'Noto Sans' + "sans-serif", fontSize: '20px', fontWeight: 'bold'}}>Charges:      <div style={{fontSize: '30px'}}>{props.leader[1]}</div> </Typography>
             </Grid>
             <Grid xs={4}>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                
                <Typography style={{fontFamily: 'Noto Sans' + "sans-serif", fontSize: '20px', fontWeight: 'bold'}}>Feelings Score: <div style={{fontSize: '30px'}}>{Math.round(props.leader[0] * 100) / 100}</div></Typography>
             </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
