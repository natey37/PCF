import React from 'react'
import { Container } from '@material-ui/core';
import MessageBoard from '../components/MessageBoard.js'

class ChargeContainer extends React.Component {

    render(){
        return (
            <div>
            
            <Container className="Container" style={{height:"100vh"}} maxWidth="md">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            

            <MessageBoard/>                
              
            </Container>
            </div>
        )
    }
}

export default ChargeContainer 