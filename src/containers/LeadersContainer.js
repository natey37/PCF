import React from 'react'
import { Container } from '@material-ui/core';
import LeaderGrid2 from '../components/LeaderGrid2.js'
import Box from '@material-ui/core/Button';

class LeadersContainer extends React.Component {

    state = {
        leaders: []

    }

    componentDidMount(){
        fetch('http://localhost:3000/sentcharges')
        .then(resp => resp.json())
        .then(resp => {
            let userLikeHash = {}
            let userFeelingsHash = {}
            let userTotalSentChargeHash = {}

            resp.map(sentcharge => {
                if(userLikeHash[sentcharge.username]){
                    userLikeHash[sentcharge.username] += sentcharge.likes
                } else {
                    userLikeHash[sentcharge.username] = sentcharge.likes
                }

                if(userFeelingsHash[sentcharge.username]){
                    userFeelingsHash[sentcharge.username] += (sentcharge.sentiment_score)
                } else {
                    userFeelingsHash[sentcharge.username] = (sentcharge.sentiment_score)
                } 

                if(userTotalSentChargeHash[sentcharge.username]){
                    userTotalSentChargeHash[sentcharge.username] += 1
                } else if(!userTotalSentChargeHash[sentcharge.username]) {
                    userTotalSentChargeHash[sentcharge.username] = 1
                } 
            })
            // let userFeelingsHash = {}
            // resp.map(sentcharge => {
            //     if(userFeelingsHash[sentcharge.username]){
            //         userFeelingsHash[sentcharge.username] += (sentcharge.sentiment_score)
            //     } else if(!userFeelingsHash[sentcharge.username]) {
            //         userFeelingsHash[sentcharge.username] = (sentcharge.sentiment_score)
            //     } 
            // })
            // let userTotalSentChargeHash = {}
            // resp.map(sentcharge => {
            //     if(userTotalSentChargeHash[sentcharge.username]){
            //         userTotalSentChargeHash[sentcharge.username] += 1
            //     } else if(!userTotalSentChargeHash[sentcharge.username]) {
            //         userTotalSentChargeHash[sentcharge.username] = 1
            //     } 
            // })
            
            console.log(userFeelingsHash)
            console.log(userTotalSentChargeHash)
            console.log(userLikeHash)

            let combinedHash = {}
            Object.keys(userFeelingsHash).forEach(function (el) {
                combinedHash[el] = [userFeelingsHash[el]]
            });
            Object.keys(userTotalSentChargeHash).forEach(function (el) {
                let average = combinedHash[el] / userTotalSentChargeHash[el]
                combinedHash[el] = [average]
            }); 
            Object.keys(userLikeHash).forEach(function (el) {
                combinedHash[el] = [...combinedHash[el], userLikeHash[el], el]
            });
          

            console.log(combinedHash)
          

            let combinedArray = []
            Object.keys(combinedHash).forEach(function (el) {
                console.log(el); // key
                console.log(userLikeHash[el]); // value
                combinedArray.push(combinedHash[el])
            });
            
            let sorted = combinedArray.sort((a, b) => a[1] > b[1] ? 1 : -1).reverse()
            this.setState({
                leaders: sorted
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
            width: '600px',
            boxShadow: '5px 5px #40907F',
            backgroundColor: "#63E2C6",
            cursor: 'default'
                }
        const filter = {
            // textAlign: 'center', 
            alignItems: 'right', 
            position: 'absolute', 
            left: '200px'

        }
        console.log(this.state.leaders)
        return (
            <div >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Box disableRipple={true} style={box}>
                    <h1 style={{color: 'white',fontFamily: 'Noto Sans' + "sans-serif", margin: '0', fontSize: '40px' }}>
                        These are the Protons!
                    </h1>
                    
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
                {/* <Filter></Filter> */}
                <br></br>
                   
                    {this.state.leaders.map((leader, index) => <LeaderGrid2 index={index} leader={leader}/>) }
                </Container>

                              
              
            </div>
        )
    }
}

export default LeadersContainer 


