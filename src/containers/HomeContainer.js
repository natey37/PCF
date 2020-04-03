import React from 'react'
import { Container } from '@material-ui/core';
import BulletinBoard from '../components/BulletinBoard.js'
import home_pin from '../styling/home_pin.png'
import pin_flipped from '../styling/pin_flipped.png'
class HomeContainer extends React.Component {

    

    render(){

        const container = {
            height: '100vh',
            overflow: 'auto',
            background: '#63E2C6',
            boxShadow: '10px 5px #888888',

        }
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{fontSize: '40px'}}>
                    <img style={{width: '40px', height: '40px'}} src={pin_flipped}></img>

                    Bulletin Board
                    <img style={{width: '40px', height: '40px'}} src={home_pin}></img>
                </h1>

            <Container  
            style={container} maxWidth="md">
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                {/* <h1 style={{textDecoration: 'underline'}}>Bulletin Board</h1> */}
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
                <BulletinBoard/>
                <br></br>
                <BulletinBoard/>
              
            </Container>
            </div>
        )
    }
}

export default HomeContainer 