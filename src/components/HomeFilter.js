import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    "&:before": {
      borderColor: "#4B7095"
    },
    '&:hover:not(.Mui-disabled):before': {
        borderColor: 'white',
    },
    '&:after': {
        borderColor: '#4B7095',
    }
  }, 
  menuItem: {
      
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
 
    console.log(props.filter)
  return (
    <div>
      <FormControl   className={classes.formControl} >
        <InputLabel style={{color: 'white'}}>See Charges By:</InputLabel>
        <Select
             onChange={event => props.onChange(event)}
          className={classes.select}
        >
          <MenuItem className={classes.menuItem} value={'today'} name="today">Today</MenuItem>
          <MenuItem className={classes.menuItem} value={'alltime'}name='allTime'>All Time</MenuItem>
          <MenuItem className={classes.menuItem} value={'favorites'}name='favorites'>My Favorites</MenuItem>

        </Select>
      </FormControl>
      
    </div>
  );
}
