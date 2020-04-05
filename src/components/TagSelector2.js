/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingLeft: '200px',
    position: 'absolute',
    left: '475px',
    bottom: '100px',
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    boxShadow: '2px 2px #BAAD63'

  },
  selector: {
      backgroundColor: '#FFED87'
  },

}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        className={classes.selector}
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
    { tag: 'Self Care'}, 
    { tag: 'Motivation'}, 
    { tag: 'Family'}, 
    { tag: 'Inspirational'}, 
    { tag: 'Self Care'}, 
    { tag: 'Motivation'}, 
    { tag: 'Family'}, 
    { tag: 'Inspirational'},
    { tag: 'Self Care'}, 
    { tag: 'Motivation'}, 
    { tag: 'Family'}, 
    { tag: 'Inspirational'},
    { tag: 'Self Care'}, 
    { tag: 'Motivation'}, 
    { tag: 'Family'}, 
    { tag: 'Inspirational'},
    { tag: 'Self Care'}, 
    { tag: 'Motivation'}, 
    { tag: 'Family'}, 
    { tag: 'Inspirational'},

];
