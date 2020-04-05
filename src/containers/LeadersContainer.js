import React from 'react'
import { Container } from '@material-ui/core';
import LeaderGrid2 from '../components/LeaderGrid2.js'
import Filter from '../components/LeaderFilter.js'
import Box from '@material-ui/core/Button';
import home_pin from '../styling/home_pin.png'
import pin_flipped from '../styling/pin_flipped.png'
import Grid from '@material-ui/core/Grid';


class LeadersContainer extends React.Component {

    render(){
        const container = {
            height: '65vh',
            overflow: 'auto',
            background: '#6699CC',
            boxShadow: '5px 5px #4B7095',
        

        }
        const box = {
            width: '500px',
            boxShadow: '5px 5px #40907F',
            backgroundColor: "#63E2C6",
                }
        const filter = {
            // textAlign: 'center', 
            alignItems: 'right', 
            position: 'absolute', 
            left: '200px'

        }
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Box style={box}>
                    <h1 style={{color: 'white'}}>These are the Protons!</h1>
                    
                </Box>

                <br></br>
                <br></br>
                <br></br>
                <Container style={container} maxWidth="md" >
                <div>
                     {/* <h2> */}
                     {/* <img style={{width: '40px', height: '40px', marginRight: '415px'}} src={pin_flipped}></img> */}
                     {/* Keep up the Postive Charge */}
                     {/* <img style={{width: '40px', height: '40px', marginLeft: '415px'}} src={home_pin}></img> */}
                     {/* </h2> */}
                </div>
                <Filter></Filter>
                <br></br>
                
                    
                    <LeaderGrid2 />  
                    <br></br>
                    <LeaderGrid2 /> 
                    <br></br>
                    <LeaderGrid2 /> 
                    <br></br>
                    <LeaderGrid2 /> 
                    <br></br>
                    <LeaderGrid2 />  
                    <br></br>
                    <LeaderGrid2 /> 
                    <br></br>
                    <LeaderGrid2 /> 
                    <br></br>
                    <LeaderGrid2 /> 
                </Container>

                              
              
            </div>
        )
    }
}

export default LeadersContainer 