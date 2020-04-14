import React from 'react';
import { Link, Redirect } from "react-router-dom";
import title from './styling/title.png'
import Box from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
class Login extends React.Component {

 
  render () {

    const box = {
      width: '500px',
      boxShadow: '5px 5px #40907F',
      backgroundColor: "#63E2C6",
          }
 
         
    const   button1= {
      fontFamily: 'Noto Sans' + "sans-serif",

      height: '40px',
      width: '150px',
      background: 'linear-gradient(45deg, #F8FC00 30%, #FF8E53 90%)',
      boxShadow: '2px 2px #BAAD63',
      fontSize: '16px',
  }

    // backgroundColor: '#008080'
    return (
      <div >
          {/* {this.props.currentUser && <Redirect to='/home'/>} */}
    

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <img style={{height: '200px', width: '700px'}}src={title}></img>
        {/* <div>
            <h2 style={{textAlign: "center", fontSize: '35px', color: 'white', fontFamily: 'Noto Sans' + "sans-serif"}}>Login</h2>
        </div> */}
        <br></br>
        <Box disableRipple={true} style={box}>
        <div >
          <form onSubmit={(event) => this.props.handleSubmit(event)}>
            <label style={{fontSize: "30px", color: 'white', fontFamily: 'Noto Sans' + "sans-serif"}}>
              Username:
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="username" style={{marginRight: '10px'}} />
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px", color: 'white', fontFamily: 'Noto Sans' + "sans-serif"}}>
              Password:
              <input onChange={(event) => this.props.handleChange(event)} type="text" name="password" style={{marginRight: '5px'}}/>
            </label>
            <br></br>

            <Button  type="submit" value="Log-In" style={button1}>Log In</Button>
          </form>

            <Link to="/signup" style={{color: 'white', fontFamily: 'Noto Sans' + "sans-serif"}}>Don't have an account? Sign up!</Link>
            
        </div>
        </Box>



        
        

        {/* <div>
          <h4 style={{textAlign: "center"}}>OR</h4>
        </div> */}

        
        {/* <div>
            <h2 style={{textAlign: "center"}}>Sign Up</h2>        
        </div>
        <div style={{textAlign: "center"}}>
          <form onSubmit={(event) => this.props.handleNewUserSubmit(event)}>
            <label style={{fontSize: "30px"}}>
              Username: 
              <input onChange={(event) => this.props.handleNewUserChange(event)}  type="text" name="username" style={{marginRight: '70px'}}/>
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Password:
              <input onChange={(event) => this.props.handleNewUserChange(event)}  type="text" name="password" style={{marginRight: '65px'}}/>
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Password Confirmation:
              <input onChange={(event) => this.props.handleNewUserChange(event)} type="text" name="passwordConfirmation" style={{marginRight: '230px'}} />
            </label>
            <br></br>
           

            <button  type="submit" value="Create-Account" style={{width: "200px", height: '40px', fontSize: "22px"}}>Create Account</button>          
            </form>
          {/* {this.props.userLogged === false && this.props.errors.map(error => <h3 key={error}>{error}</h3>)} */}
    
    
      </div>
  
     
    );
  }
  
}

export default Login;
