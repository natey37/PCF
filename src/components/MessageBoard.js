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
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

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

    state = {
        message: '',
        feelings: '', 
        score: 0,
        close: false 
    }

    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);
      }

    setClose = () => {
        this.setState({
            close: true 
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value 
        })
    }

    handleMessageClick = (event) => {
        event.preventDefault()
        this.setState({
            close: false
        })
        fetch('http://localhost:3000/score', { 
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({message: this.state.message})
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            console.log(resp.score)
            if(resp.errors){
                alert(resp.errors)
            } else {
                if(resp.score >= 0.3){
                    this.setState({
                        feelings : 'positive',
                        score: resp.score
                   })
                    // alert("You are a positive Proton! Keep up the charge! \n Here is your sentiment score: " + resp.score )
                } else if (resp.score >= 0 && resp.score < 0.3) {
                    this.setState({
                        feelings : 'neutral',
                        score: resp.score

                   })
                    // alert("You are a neutral Neutron today!")
                } else if (resp.score < 0) {
                   this.setState({
                        feelings : 'negative',
                        score: resp.score

                   })
                    // alert("You are a negative Electron. Please try again with some more positive!")
                }
                   
            }
        })
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
        const   button= {
                    height: '40px',
                    width: '200px',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    boxShadow: '2px 2px #BAAD63'
                }
        const alert= {
            textAlign: 'center', 
            verticalAlign: 'middle', 
            zIndex: 1,
            position: 'absolute',
            left: '32.8%', 
            right: '50%', 
            width: '500px',
            height: '300px',
            marginTop: '150px'
            
        }

        return(
            <div>  

                    
                    {this.state.feelings === 'neutral' && this.state.close === false ? 
                    
                    <Alert style={alert}  severity="info" onClose={() => this.setClose()}>
                        <AlertTitle>You are a neutral Neutron!</AlertTitle>
                         Your message had a score of {this.state.score}. You're almost there! Keep up the good attitude!
                    </Alert> :
                    null
                    }
                    {this.state.feelings === 'positive' && this.state.close === false ? 
                    
                        <Alert style={alert}  severity="success" onClose={() => this.setClose()}>
                            <AlertTitle>You are a positive Proton!</AlertTitle>
                            Your message had a score of {this.state.score}. You're awesome! Keep up the positive charge!
                        </Alert> :
                        null
                    }
                    {this.state.feelings === 'negative' && this.state.close === false ? 
                    
                        <Alert style={alert}  severity="error" onClose={() => this.setClose()}>
                            <AlertTitle>You are a negative Electron!</AlertTitle>
                            Your message had a score of {this.state.score} Please write something more positive!
                        </Alert> :
                        null
                    }
            
              
                <Paper style={paper} elevation={20}>
                    <h1 style={{paddingTop: '10px', fontSize: '30px'}}>Write something positive to share with a stranger!</h1>
                    <Paper style={message}>
                        <textarea
                            onChange={event => this.handleMessageChange(event)}
                            style={style}
                            ref={c => (this.textarea = c)}
                            placeholder="Spread the Positive Charge! Need a prompt? Click Below!"
                            rows={1}
                            value={this.state.message}
                        />
                    </Paper>
                    <br></br>
                    <Button
                            onClick={event => this.handleMessageClick(event)}
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

