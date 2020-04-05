import React from 'react'
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import atom from '../styling/atom.png'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import autosize from "autosize";
import charge from '../styling/charge.png'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       backgroundColor: '#FFED87',
//       padding: theme.spacing(2),
//       margin: 'auto',
//       maxWidth: 800,
//       height: '50vh',
//       boxShadow: '5px 10px #888888'
  
//     },
//     message: {
//       // color: '#FFFFFF',
//       backgroundColor: '#122C34',
//       padding: theme.spacing(2),
//       margin: 'auto',
//       maxWidth: 600,
//       height: '20vh'
//     },
//     text: {
//         color: '#FFFFFF',
//         backgroundColor: '#D3D3D3'
//     }
// }))

class MessageBoard extends React.Component {

    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);
      }

    render(){
        const style = {
            textAlign: 'center',
            width: 500, 
            maxHeight: "115px",
            minHeight: "38px",
            resize: "none",
            padding: "9px",
            boxSizing: "border-box",
            fontSize: "15px",
            backgroundColor: '#D3D3D3'
          };
         const message = {
                  color: '#FFFFFF',
                  backgroundColor: '#122C34',
                  padding: '20px',
                  margin: 'auto',
                  maxWidth: 600,
                  height: '20vh'
                }
        const  paper= {
                  backgroundColor: '#FFED87',
                //   padding: theme.spacing(2),
                  margin: 'auto',
                  maxWidth: 800,
                  height: '40vh',
                  boxShadow: '5px 5px #BAAD63'
                }
        // const useStyles = makeStyles((theme) => ({
        //             button: {
        //               margin: theme.spacing(1),
        //             },
        //         }))
        // const button1 = useStyles();

        const   button= {
                    height: '40px',
                    width: '200px',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    boxShadow: '2px 2px #BAAD63'
                }
         
        return(
            
            <div>
                <Paper style={paper} elevation={20}>
                    <h1 style={{paddingTop: '10px', fontSize: '30px'}}>Write something positive to share with a stranger!</h1>
                    <Paper style={message}>
                        <textarea
                            style={style}
                            ref={c => (this.textarea = c)}
                            placeholder="Spread the Positive Charge! Need a prompt? Click Below!"
                            rows={1}
                            defaultValue=""
                        />
                    </Paper>
                    <br></br>
                    <Button
                            variant="contained"
                            color="primary"
                            style={button}
                        
                    >Send A Charge!
                    <img src={charge} style={{width: '20px', height: '20px'}}></img>
                    </Button>
                </Paper>
    
            </div>
        )
    }
    

    
       
    }
  
export default MessageBoard


