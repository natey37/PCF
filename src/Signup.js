import React from 'react';
import { Redirect } from "react-router-dom"
import title from './styling/title.png'
import Box from '@material-ui/core/Button';

class Signup extends React.Component {

  
 

 
  render () {

   
    const box = {
      height: '60vh',
      width: '800px',
      boxShadow: '5px 5px #40907F',
      backgroundColor: "#63E2C6",
          }


    // backgroundColor: '#008080'
    return (
      <div style={{fontFamily: 'Noto Sans' + "sans-serif", color: 'white'}}>
            {/* {this.props.currentUser && <Redirect to='/recharge'/>} */}

    

        <br></br>
        <br></br>
        <br></br>
        
      
        
        
        <img style={{height: '200px', width: '700px'}}src={title}></img>

        
        <Box disableRipple={true} style={box}>

        {/* <div>
            <div style={{textAlign: "center", fontSize: '35px'}}>Sign Up</div>        
        </div> */}
        <div style={{color: 'white', fontFamily: 'Noto Sans' + "sans-serif"}}>
          <h1 style={{color: 'black'}}>Sign Up</h1>
          <form onSubmit={(event) => this.props.handleSubmit(event)}>
            
            <label style={{fontSize: "30px"}}>
              Name: 
              
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="name" />
            </label>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Email: 
            
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="email" />
            </label>
            <br></br>
            
            <label style={{fontSize: "30px",marginRight: '80px'}}>
              Username: 
            
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="username"/>
            </label>
            <br></br>
            
            <label style={{fontSize: "30px", marginRight: '80px'}}>
              Password:
              
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="password"/>
            </label>
            <br></br>
            
            <label style={{fontSize: "30px", marginRight: '60px'}}>
             
              PW Confirmation:
              
              <input onChange={(event) => this.props.handleChange(event)} type="text" name="passwordConfirmation" style={{marginRight: '135px'}}/>
            </label>
            <br></br>
           

            <button  type="submit" value="Create-Account" style={{width: "200px", height: '40px', fontSize: "22px", fontFamily: 'Noto Sans' + "sans-serif"}}>Create Account</button>          
            </form>
          
          {/* {this.props.userLogged === false && this.props.errors.map(error => <h3 key={error}>{error}</h3>)} */}
            
        </div>
        </Box>
       
      </div>
  
     
    );
  }
  
}

export default Signup;
