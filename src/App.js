import React from 'react';
import './styling/App.css';
import Nav from './Nav.js'
import Charge from './Charge.js'
import Recharge from './Recharge.js'
import Home from './Home.js'
import Leaders from './Leaders.js'
import Feelings from './Feelings.js'
import Login from './Login.js'
import Signup from './Signup.js'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class App extends React.Component {

  state = {
    loginForm: {
      username: '', 
      password: ''
    },
    signupForm: {
      name: '',
      email: '',
      username: '', 
      password: '', 
      passwordConfirmation: ''
    },
    currentUser: null
}

componentDidMount(){
  const user_id = localStorage.user_id

  if(user_id){
    fetch('http://localhost:3000/auto_login', {
    headers: {
        "Authorization": user_id 
      }
    })
    .then(resp => resp.json())
    .then(response => {
      if(response.errors){
        alert(response.errors)
      } else {
        this.setState({
          currentUser: response 
        })
      }
    })
  } else {

  }
}

setUser = (user) => {
  this.setState({
    currentUser: user
  }, () => {
    localStorage.username = user.username
    localStorage.user_id = user.id 
    this.props.history.push('/recharge')
  })
}

logout = () => {
  this.setState({
    currentUser: null 
  }, () => {
    localStorage.removeItem("user_id")
    this.props.history.push('/login')
  })
}

handleUserChange = (event) => {
  this.setState({
    loginForm: {...this.state.loginForm, [event.target.name]: event.target.value
    }
  })
}

handleUserSubmit = (event) => {
  event.preventDefault()
    fetch('http://localhost:3000/login', {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(this.state.loginForm)
    })
    .then(res => res.json())
    .then(response => {
      console.log(response)
      if(response.errors){
        alert(response.errors)
      } else {
        this.setUser(response.user)
        
      }
    })
  
}

handleNewUserChange = (event) => {
  this.setState({
    signupForm: {...this.state.signupForm, [event.target.name]: event.target.value
    }  })
}

handleNewUserSubmit = (event) => {
  event.preventDefault()

  if(this.state.password === this.state.passwordConfirmation){
      fetch('http://localhost:3000/users', {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({name: this.state.signupForm.name, email: this.state.signupForm.email, username: this.state.signupForm.username, password: this.state.signupForm.password})
      })
      .then(res => res.json())
      .then(response => {
        if(response.errors){
          alert(response.errors)
        } else {
          this.setUser(response.user)
          
        }
      })
    } else {
      alert("Passwords dont match!")
    }
 
}

  render(){
    return (
      <div className="App" style={{backgroundColor: '#2A4494'}}>
        
          
            <Nav currentUser={this.state.currentUser} logout={this.logout}/>
            <Switch>
                <Route exact path="/login" 
                  render={(props) => <Login  handleSubmit={this.handleUserSubmit} handleChange={this.handleUserChange}/>}
                />
                <Route exact path="/signup" 
                  render={(props) => <Signup  handleChange={this.handleNewUserChange} handleSubmit={this.handleNewUserSubmit} currentUser={this.state.currentUser}/>}
                />
                <Route exact path="/home"
                  render={(props) => <Home currentUser={this.state.currentUser}/>}
                />
                <Route exact path="/charge"
                  render={(props) => <Charge currentUser={this.state.currentUser} />}
                />
                <Route exact path="/recharge"
                  render={(props) => <Recharge currentUser={this.state.currentUser}/>}
                />
                <Route exact path="/feelings"
                  render={(props) => <Feelings currentUser={this.state.currentUser}/>}
                />
                <Route exact path="/leaders"
                  render={(props) => <Leaders currentUser={this.state.currentUser}/>}
                />
              </Switch>
          
      </div>
    );
  }
 
}

export default App;
