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


class BulletinBoard extends React.Component {

  state = {
      likes: '',
      switch: false
  }

  componentDidMount(){
    this.setState({
      likes: this.props.message.likes
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

  handleBothClickEvents = () => {
    this.handleLike()
    this.handleSwitch()
  }
 
  render(){
    
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
        width: 128,
        height: 128,
      }
    const  img= {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      }
      return (
        <div style={root}>
          <br></br>
          <br></br>
          <Paper style={paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase style={image}>
                  <img style={img} alt="complex" src={atom} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      username
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {this.props.message.message}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <Moment format="DD/MM/YY HH:mm:ss">
                            {this.props.message.created_at}

                        </Moment>
                    </Typography>
                  </Grid>
                  <Grid item>
                    {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Like
                    </Typography> */}
                    <Button onClick={() => this.handleBothClickEvents()} >
                      
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
                  </Grid>
                </Grid>
                {/* <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid> */}
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
    }
  
}

export default BulletinBoard