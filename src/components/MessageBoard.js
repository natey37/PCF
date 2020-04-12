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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

import autosize from "autosize";
import charge from '../styling/charge.png'

import positive1 from '../styling/positive1.png'
import negative1 from '../styling/negative1.png'
import neutral1 from '../styling/neutral1.png'


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
        chargeID: '',
        userID: '',
        sentUserID: 1,
        score: 0,
        username: '',

        message: '',
        feelings: '', 
        
        close: false,

        private: false

    }

    
    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);

        this.setState({
            username: localStorage.username
        })
      }

      handleCheckBoxChange = (event) => {
        this.setState({
            private: true
        })
      };

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
            console.log(resp.charge.id)
            if(resp.errors){
                alert(resp.errors)
            } else {
                if(resp.score >= 0.3){
                    this.setState({
                        feelings : 'positive',
                        score: resp.score,
                        chargeID: resp.charge.id,
                        message: ''
                        
                   }, () => {
                       fetch('http://localhost:3000/sentcharges', {
                           method: "POST", 
                           headers: {
                            'Content-Type': 'application/json'
                        }, 
                           body: JSON.stringify({
                               charge_id: this.state.chargeID,
                               user_id: localStorage.user_id,
                               sent_user_id: this.state.sentUserID, 
                               sentiment_score: this.state.score,
                               likes: 0, 
                               message: resp.charge.message,
                               username: this.state.username
                           })
                       })
                       .then(resp => resp.json()).then(resp => {
                            console.log(resp.sentcharge.id)
                            console.log(resp)
                            console.log(this.props.values)
                            this.makeTags(resp)
                       })
                   })
                } else if (resp.score >= 0 && resp.score < 0.3) {
                    this.setState({
                        feelings : 'neutral',
                        score: resp.score,
                        chargeID: resp.charge.id,
                        message: ''
                        
                   }, () => {
                        fetch('http://localhost:3000/sentcharges', {
                            method: "POST", 
                            headers: {
                            'Content-Type': 'application/json'
                        }, 
                            body: JSON.stringify({
                                charge_id: this.state.chargeID,
                                user_id: localStorage.user_id,
                                sent_user_id: this.state.sentUserID, 
                                sentiment_score: this.state.score,
                                likes: 0,
                                message: resp.charge.message,
                                username: this.state.username

                            })
                        })
                        .then(resp => resp.json()).then(resp => {
                            // console.log(resp.sentcharge.id)
                            console.log(resp)
                            // console.log(this.props.values)
                            this.makeTags(resp)
                       })
                   })
                } else if (resp.score < 0) {
                   this.setState({
                        feelings : 'negative',
                        score: resp.score,
                        message: ''

                   })
                }     
            }

           
        })
    }

    makeTags = (resp) => {
        for (const value in this.props.values) {
            console.log(value)
            
            fetch('http://localhost:3000/chargetags', {
                method: "POST", 
                headers: {
                 'Content-Type': 'application/json'
             }, 
                body: JSON.stringify({
                    sentcharge_id: resp.sentcharge.id,
                    tag_id: 0,
                    tagtype: value
                })
               }).then(resp => resp.json()).then(resp => {console.log(resp)})
        
        }
    }

    render(){
        console.log(this.state)
        const style = {
            fontFamily: 'Noto Sans' + "sans-serif",

            textAlign: 'center',
            width: 500, 
            maxHeight: "115px",
            minHeight: "38px",
            resize: "none",
            padding: "9px",
            boxSizing: "border-box",
            fontSize: "15px",
            backgroundColor: '#FFFFFF'
          };
         const message = {
             
                  color: '#FFFFFF',
                  backgroundColor: '#122C34',
                  padding: '20px',
                  margin: 'auto',
                  maxWidth: 600,
                  height: '15vh'
                }
        const  paper= {
                  backgroundColor: '#FFED87',
                //   padding: theme.spacing(2),
                  margin: 'auto',
                  maxWidth: 800,
                  height: '45vh',
                  boxShadow: '5px 5px #BAAD63'
                }
        const   button= {
                    fontFamily: 'Noto Sans' + "sans-serif",

                    height: '40px',
                    width: '200px',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    boxShadow: '2px 2px #BAAD63',
                    fontSize: '16px',
                }
        const alert= {
            textAlign: 'center', 
            verticalAlign: 'middle', 
            zIndex: 1,
            position: 'absolute',
            left: '26%', 
            right: '50%', 
            width: '700px',
            height: '400px',
            marginTop: '150px'
            
        }

        return(
            <div>  

                    
                    {this.state.feelings === 'neutral' && this.state.close === false ? 
                    
                    <Alert icon={false} style={alert}  severity="info" onClose={() => this.setClose()}>
                         <img style={{height: '300px', width: '350px', marginLeft: '150px'}} src={neutral1}></img>
                        <AlertTitle style={{marginLeft: '70px'}}>You are a neutral Neutron!</AlertTitle>
                        <div style={{marginLeft: '70px'}}>
                         Your message had a score of {Math.round(this.state.score * 100) / 100}. You're almost there! Keep up the good attitude!
                         </div>
                    </Alert> :
                    null
                    }
                    {this.state.feelings === 'positive' && this.state.close === false ? 
                    
                        <Alert  icon={false} style={alert}  severity="success" onClose={() => this.setClose()}>
                            <img style={{height: '300px', width: '350px', marginLeft: '150px'}} src={positive1}></img>
                            <br></br>
                            <AlertTitle style={{marginLeft: '70px'}}>You are a positive Proton!</AlertTitle>
                            <div style={{marginLeft: '70px'}}>
                            Your message had a score of {Math.round(this.state.score * 100) / 100}. You're awesome! Keep up the positive charge!
                            </div>
                        </Alert> :
                        null
                    }
                    {this.state.feelings === 'negative' && this.state.close === false ? 
                    
                        <Alert icon={false} style={alert}  severity="error" onClose={() => this.setClose()}>
                             <img style={{height: '300px', width: '350px', marginLeft: '150px'}} src={negative1}></img>
                            <AlertTitle>You are a negative Electron!</AlertTitle>
                            Your message had a score of {Math.round(this.state.score * 100) / 100}. Your message will not be sent! Please write something more positive!
                        </Alert> :
                        null
                    }
            
              
                <Paper style={paper} elevation={20}>
                    <h1 style={{paddingTop: '10px', fontSize: '30px',             fontFamily: 'Noto Sans' + "sans-serif", marginBottom: '0px'}}>Write something positive to share with a stranger!</h1>
                    <h4 style={{fontFamily: 'Noto Sans' + "sans-serif"}}>Tell a personal story, share an idea, tell a funny joke!</h4>

                    <Paper style={message}>
                        <textarea
                            spellcheck="false"
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
                    <br></br>
                    <br></br>
                    <Tooltip title="Click here to make your message private. It will be sent to another user but not displayed on the bulletin board!">
                        <FormControlLabel
                            control={<Checkbox checked={this.state.private} onChange={this.handleCheckBoxChange} name="private" />}
                            label="Private"
                            style={{fontFamily: 'Noto Sans' + "sans-serif"}}
                        />
                    </Tooltip>
                </Paper>
    
            </div>
        )
    }
    

    
       
    }
  
export default MessageBoard


