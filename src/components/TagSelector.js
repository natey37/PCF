/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



class TagSelector extends React.Component {

   
  render(){
    console.log(this.props)
    const root= {
        // paddingLeft: '200px',
        position: 'absolute',
        left: '250px',
        width: 500,
        '& > * + *': {
        //   marginTop: theme.spacing(3),
        },
        boxShadow: '3px 3px #BAAD63'
    
      }
      const selector= {
          backgroundColor: '#FFED87'
      }
    return (
        <div style={root}>
          <Autocomplete
            onChange={(event, value) => this.props.handleChange(event, value)}
            style={selector}
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
                placeholder="Choose a Tag for your Message!"
              />
            )}
          />
         
        </div>
      );
  }
 
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

export default TagSelector