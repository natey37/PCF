import React from 'react'
import { Container } from '@material-ui/core';
import BulletinBoard from '../components/BulletinBoard.js'


class HomeContainer extends React.Component {

    

    render(){
        return (
            <div>
            
            <Container className="Container" style={{ height:"100vh"}} maxWidth="md">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
              
            </Container>
            </div>
        )
    }
}

export default HomeContainer 