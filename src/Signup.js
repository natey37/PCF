import React from 'react';
import { Redirect } from "react-router-dom"

class Signup extends React.Component {

  
 

 
  render () {

   
 


    // backgroundColor: '#008080'
    return (
      <div >
            {/* {this.props.currentUser && <Redirect to='/recharge'/>} */}

    

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        
        <div>
            <h2 style={{textAlign: "center"}}>Sign Up</h2>        
        </div>
        <div style={{textAlign: "center"}}>
          <form onSubmit={(event) => this.props.handleSubmit(event)}>
            
            <label style={{fontSize: "30px"}}>
              Name: 
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="name" style={{marginRight: '70px'}}/>
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Email: 
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="email" style={{marginRight: '70px'}}/>
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Username: 
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="username" style={{marginRight: '70px'}}/>
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Password:
              <input onChange={(event) => this.props.handleChange(event)}  type="text" name="password" style={{marginRight: '65px'}}/>
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Password Confirmation:
              <input onChange={(event) => this.props.handleChange(event)} type="text" name="passwordConfirmation" style={{marginRight: '230px'}} />
            </label>
            <br></br>
           

            <button  type="submit" value="Create-Account" style={{width: "200px", height: '40px', fontSize: "22px"}}>Create Account</button>          
            </form>
          {/* {this.props.userLogged === false && this.props.errors.map(error => <h3 key={error}>{error}</h3>)} */}
            
        </div>
       
      </div>
  
     
    );
  }
  
}

export default Signup;
