import React from 'react';
import { Link, Redirect } from "react-router-dom";
import title from './styling/title.png'

class Login extends React.Component {

 
  render () {

   
 


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
        <div style={{textAlign: "center"}}>
          <form onSubmit={(event) => this.props.handleSubmit(event)}>
            <label style={{fontSize: "30px", color: 'white', fontFamily: 'Noto Sans' + "sans-serif"}}>
              Username:
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="username" style={{marginRight: '75px'}} />
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px", color: 'white', fontFamily: 'Noto Sans' + "sans-serif"}}>
              Password:
              <input onChange={(event) => this.props.handleChange(event)} type="text" name="password" style={{marginRight: '70px'}}/>
            </label>
            <br></br>

            <button  type="submit" value="Log-In" style={{width: "200px", height: '40px', fontSize: "22px", fontFamily: 'Noto Sans' + "sans-serif"}}>Log In</button>
          </form>

            <Link to="/signup" style={{color: 'white', fontFamily: 'Noto Sans' + "sans-serif"}}>Don't have an account? Sign up!</Link>
            
        </div>



        
        

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
