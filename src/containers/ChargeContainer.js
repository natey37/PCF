import React from 'react'
import { Container } from '@material-ui/core';
import MessageBoard from '../components/MessageBoard.js'
import TagSelector from '../components/TagSelector.js'
import Paper from '@material-ui/core/Paper';
import Prompts from '../components/Prompts.js'
class ChargeContainer extends React.Component {

    render(){
        const paper = {
            position: 'absolute', 
            right: '100px',
            width: '500px',
            height: '225px',
            backgroundColor: '#FFED87',
            boxShadow: '5px 5px #BAAD63'

        }
        const h3= {
            position: 'absolute',
            left: '250px',
            color: 'white'
        }
      
        return (
            <div style={{height: '100vh'}}>
            
            {/* <Container className="Container" style={{height:"100vh"}} maxWidth="md"> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <MessageBoard/>                
                <br></br>
                <br></br>
                <br></br>

            <Paper style={paper}>
                <Prompts/>
            </Paper>
                <br></br>
                <br></br>
            <h3 style={h3}>Help us share your positivity with someone who needs it most!</h3>
            <br></br>
            <br></br>
            <TagSelector />
           

            {/* </Container> */}

            </div>
        )
    }
}

export default ChargeContainer 