import React from 'react'
import FeelingsTable from '../components/FeelingsTable.js'
import Box from '@material-ui/core/Button';

class FeelingsContainer extends React.Component {

    state = {
        scores: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/sentcharges')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            let scores = resp.map(resp => resp.sentiment_score)
            let filtered = scores.filter(function (el) {
                return el != null;
              });
              const add = (a, b) =>
                a + b
              // use reduce to sum our array
              const sum = filtered.reduce(add) / filtered.length
            this.setState({
                scores: sum 
            })
        })
    }

    render(){
        console.log(this.state.scores)
        const box = {
            width: '500px',
            boxShadow: '5px 5px #40907F',
            backgroundColor: "#63E2C6",
                }
        return (
            <div>
            
            
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Box  style={box}>
                    <h1 style={{color: 'white'}}>How are we feeling?</h1>

                </Box>
                <br></br>
                <br></br>
                <br></br>
                <FeelingsTable score={this.state.scores} />  
                   
            </div>
        )
    }
}

export default FeelingsContainer 