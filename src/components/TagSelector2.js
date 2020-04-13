/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingLeft: '200px',
    position: 'relative',
    left: '475px',
    
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    boxShadow: '2px 2px #BAAD63'

  },
  selector: {
      backgroundColor: '#FFED87'
  },
  selector1: {
    backgroundColor: 'red',
    color: 'red'
},

}));

export default function Tags(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        onChange={props.handleChange}
        className={classes.selector}
        // PaperComponent={classes.selector1}
        autoComplete={true}
        multiple
        id="tags-outlined"
        options={tagOptions}
        getOptionLabel={(option) => option.tag}
        // defaultValue={[tagOptions[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label=""
            placeholder="Choose tags that are most important to you!"
          />
        )}
      />
     
    </div>
  );
}

const tagOptions = [
    { tag: 'Achievement'}, 
    { tag: 'Family'}, 
    { tag: 'Friendship'}, 
    { tag: 'Inspiration'}, 
    { tag: 'Happiness'}, 
    { tag: 'Heartfelt'}, 
    { tag: 'Humanity'}, 
    { tag: 'Humor'}, 
    { tag: 'Kudos'}, 
    { tag: 'Motivation'}, 
    { tag: 'Self Care'}, 
    { tag: 'Self Esteem'},
    { tag: 'Self Improvment'},
    { tag: 'Serious'}, 
    { tag: 'Silly'}, 
    

];
