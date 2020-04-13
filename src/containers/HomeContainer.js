import React from 'react'
import { Container, isWidthDown } from '@material-ui/core';
import BulletinBoard from '../components/BulletinBoard.js'
import home_pin from '../styling/home_pin.png'
import pin_flipped from '../styling/pin_flipped.png'
import Box from '@material-ui/core/Button';
import HomeFilter from '../components/HomeFilter.js'
import Grid from '@material-ui/core/Grid';
import '../styling/index.css'
class HomeContainer extends React.Component {

    state = {
        messages: [], 
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/sentcharges')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            let sortedMessages = resp.sort((a,b) => a.created_at > b.created_at ? 1 : -1  ).reverse().slice(0, 20)
            this.setState({
                messages: sortedMessages
            })
        })
    }

    deletePost = (event, id) => {
        event.preventDefault()
        console.log(id)
        fetch(`http://localhost:3000/sentcharges/${id}`, {
            method: "DELETE", 
            headers: {
                'Content-Type': 'application/json'
                    }
        }).then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            let newSortedMessages = this.state.messages.filter(message => message.id !== id)
            console.log(newSortedMessages)
            this.setState({
                messages: newSortedMessages
            })
        })
    }

    render(){

        const container = {
            height: '70vh',
            overflow: 'auto',
            background: '#6699CC',
            boxShadow: '5px 5px #4B7095',

        }
        const box = {
            width: '500px',
            boxShadow: '5px 5px #40907F',
            backgroundColor: "#63E2C6",
                }
        const row = {
            display: 'flex'
        }
        const column = {
            flex: '33%', 
            padding: '5px'
        }
        const h1 = {
            fontFamily: 'Noto Sans' + "sans-serif",
            // fontFamily: 'soleil' + 'sansSerif',
            // fontStyle: 'normal',
            // fontWeight: 300,
            fontSize: '40px',
            color: 'white',
            margin: '0'
        }
               
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Box style={box}>
                    
                    <h1 style={h1}>
                        {/* <img style={{width: '30px', height: '30px', marginRight: '55px'}} src={pin_flipped}></img> */}
                        
                        
                        Bulletin Board
                        
                        
                        {/* <img style={{width: '30px', height: '30px', marginLeft: '55px'}} src={home_pin}></img> */}
                    </h1>
                
                </Box>
            <br></br>
            <br></br>
            <br></br>
            <Container  
            style={container} maxWidth="md">
            
                {/* <br></br>
                <div>
                     <img style={{width: '40px', height: '40px', marginRight: '415px'}} src={pin_flipped}></img>

                      <img style={{width: '40px', height: '40px', marginLeft: '415px'}} src={home_pin}></img>
                      <HomeFilter></HomeFilter>

                </div> */}

                <div style={row}>
                   <div style={column}>
                        <img style={{width: '40px', height: '40px', marginRight: '280px'}} src={pin_flipped} alt="pinleft" />
                    </div>
                    <div style={column}>
                        <HomeFilter></HomeFilter>
                    </div>
                    <div style={column}>
                        <img style={{width: '40px', height: '40px', marginLeft: '280px' }} src={home_pin} alt="pinright"/>
                    </div>
                </div>

                {this.state.messages.map((message, index) => <BulletinBoard key={index}message={message} delete={this.deletePost}/>)}
                {/* <h1 style={{textDecoration: 'underline'}}>Bulletin Board</h1> */}
                {/* <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
                <br></br>
                <BulletinBoard/> */}
              
            </Container>
            </div>
        )
    }
}

export default HomeContainer 