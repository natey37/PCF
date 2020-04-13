import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import atom from '../styling/atom.png'
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import charge from '../styling/charge.png';
import positive1 from '../styling/positive1.png'
import neutral1 from '../styling/neutral1.png'

class BulletinBoard extends React.Component {

  state = {
      likes: '',
      switch: false,
      background: false, 
      edit: false,
      message: '',
      favorite: false 

  }

  componentDidMount(){
    this.setState({
      likes: this.props.message.likes,
      message: this.props.message.message
    })
  }

  handleMessageChange = (event) => {
    event.preventDefault()
    this.setState({
      message: event.target.value
    })
  }

  handleLike = () => {
    if(!this.state.switch)
    this.setState({
        likes: this.state.likes + 1
      }, () => {
        fetch(`http://localhost:3000/sentcharges/${this.props.message.id}`, {
          method: "PATCH", 
          headers: {
              'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({likes: this.state.likes})
      })
      .then(resp => resp.json()).then(resp => {
        console.log(resp)
        this.setState({
          likes: resp.likes.likes
        })
      })
    })
    
  }

  handleSwitch = () => {
    this.setState({
      switch: true
    })
  }

  handleBackgroundChange = () => {
    this.setState({
      background: true
    })
  }

  handleAllClickEvents = () => {
    console.log(this.props.message.user_id)
    console.log(localStorage.user_id)
    if(this.props.message.user_id !== parseInt(localStorage.user_id)){
      this.handleLike()
      this.handleSwitch()
      this.handleBackgroundChange()
    }
   
  }

  handleEdit = () =>  {
    console.log('inside'
    )
    this.setState({
      edit: true 
    })
  }

    editButton = () => {
      return (
        <Button onClick={this.handleEdit}>
            Edit
        </Button>
      )
    }

    handleResend = () => {
      fetch(`http://localhost:3000/sentcharges/${this.props.message.id}`, {
          method: "PATCH", 
          headers: {
              'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({message: this.state.message})
      })
      .then(resp => resp.json()).then(resp => {
        console.log(resp)
        this.setState({
          edit: false
        })
      })
    }

    resendButton = () => {
      return (
        <Button onClick={this.handleResend}>
            Resend
        </Button>
      )
    }

    handleFavorite = () => {
      console.log('hi from favorite')
      fetch('http://localhost:3000/favorites', {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({user_id: parseInt(localStorage.user_id), sentcharge_id: this.props.message.id})
      })
      .then(resp => resp.json()).then(resp => {

        console.log(resp)
        this.setState({
          favorite: true 
        })
      })
    
    }
 
  render(){
    console.log(this.props)
    
     const root= {
        flexGrow: 1,
        
      }
    const paper= {
        // padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
        boxShadow: '5px 5px #4B7095',
        backgroundColor: '#FAF0E6'
    
      }
      
    const image= {
        width: 150,
        height: 150,
      }
    const  img= {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      }

      const   button= {
        fontFamily: 'Noto Sans' + "sans-serif",

        height: '40px',
        width: '150px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '2px 2px #BAAD63',
        fontSize: '16px',
    }

    const   button1= {
      fontFamily: 'Noto Sans' + "sans-serif",

      height: '40px',
      width: '150px',
      background: 'linear-gradient(45deg, #F8FC00 30%, #FF8E53 90%)',
      boxShadow: '2px 2px #BAAD63',
      fontSize: '16px',
  }
  const style = {
    fontFamily: 'Noto Sans' + "sans-serif",

    textAlign: 'center',
    width: 400, 
    maxHeight: "115px",
    minHeight: "38px",
    resize: "none",
    padding: "9px",
    boxSizing: "border-box",
    fontSize: "15px",
    backgroundColor: '#FFFFFF'
  };
  console.log(this.props.message.id)
      return (
        <div style={root}>
          <br></br>
          <br></br>
          <Paper style={paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase style={image}>
                  {this.props.message.sentiment_score > 0.3 ? 
                      <img style={img} alt="positive" src={positive1} />
                  :
                      <img style={img} alt="complex" src={neutral1} />
                }
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container style={{marginRight: "140px"}}>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" style={{     fontFamily: 'Noto Sans' + "sans-serif", fontSize: '20px'}}>
                      {this.props.message.username}
                    </Typography>
                    {this.state.edit ? 
                        <textarea
                        spellcheck="false"
                        onChange={event => this.handleMessageChange(event)}
                        style={style}
                        ref={c => (this.textarea = c)}
                        rows={1}
                        value={this.state.message}
                      />
                    :
                      <Typography variant="body2" gutterBottom style={{fontFamily: 'Noto Sans' + "sans-serif", fontSize: '17px'}}>
                        {this.state.message}
                      </Typography>
                  }
                    
                    <br></br>

                    {!this.state.background ? 
                      <Button style={button} onClick={() => this.handleAllClickEvents()} >
                        
                        {this.state.switch ? 
                        <div>
                          Charge: {this.state.likes}
                          <img src={charge} style={{width: '20px', height: '20px'}}></img> 
                        </div>
                        :
                        <div>
                          <img src={charge} style={{width: '20px', height: '20px'}}></img> 
                          Charge: {this.state.likes}
                        </div>
                      }
                      {/* charge: {this.state.likes} */}
                      </Button>
                    : 
                      <Button style={button1} onClick={() => this.handleAllClickEvents()} >
                        
                      {this.state.switch ? 
                      <div>
                        Charge: {this.state.likes}
                        <img src={charge} style={{width: '20px', height: '20px'}}></img> 
                      </div>
                      :
                      <div>
                        <img src={charge} style={{width: '20px', height: '20px'}}></img> 
                        Charge: {this.state.likes}
                      </div>
                    }
                    {/* charge: {this.state.likes} */}
                      </Button>
                    }
                      



                    
                  </Grid>
                
                  
                  <Grid item>
                      {this.props.message.user_id === parseInt(localStorage.user_id) ? 
                          <Grid item>
                              <Button onClick={event => this.props.delete(event, this.props.message.id)}>
                                Delete
                              </Button>
                          </Grid>
                        :
                        null
                    }
                     {this.props.message.user_id === parseInt(localStorage.user_id ) ? 
                          
                          <Grid item>
                            {!this.state.edit ? this.editButton() : this.resendButton()}
                              {/* <Button onClick={this.handleEdit}>
                                {this.state.edit ? "Resend!" : "Edit"}
                              </Button> */}
                          </Grid>
                        :
                       null
                    }
                     {this.props.message.user_id !== parseInt(localStorage.user_id ) ? 
                          
                          <Grid item>
                            <Button onClick={this.handleFavorite}>
                              {this.state.favorite ? "Saved!" : "Save"}
                            </Button>
                          </Grid>
                        :
                       null
                    }
                    
                    <Typography variant="body2" color="textSecondary" style={{     fontFamily: 'Noto Sans' + "sans-serif", marginLeft: '360px'}}>
                        <Moment format="D MMM YYYY HH:mm:ss">
                            {this.props.message.created_at}

                        </Moment>
                    </Typography>
                    
                  </Grid>

                </Grid>
                    
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
    }
  
}

export default BulletinBoard