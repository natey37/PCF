import React from 'react'
import FeelingsTable from '../components/FeelingsTable.js'
import Box from '@material-ui/core/Button';

class FeelingsContainer extends React.Component {

    render(){
      
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
                <FeelingsTable />  
                   
            </div>
        )
    }
}

export default FeelingsContainer 