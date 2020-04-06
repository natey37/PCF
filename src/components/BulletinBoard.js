import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import atom from '../styling/atom.png'
import Button from '@material-ui/core/Button';



class BulletinBoard extends React.Component {

  state = {
      likes: ''
  }

  componentDidMount(){
    this.setState({
      likes: this.props.message.likes
    })
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1
    }, () => {
      fetch(`http://localhost:3000/sentcharges/1`, {
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
                      {this.props.message.created_at}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Like
                    </Typography> */}
                    <Button onClick={() => this.handleLike()}>
                      Like: {this.state.likes}
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