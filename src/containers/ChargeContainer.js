import React from 'react'
import { Container } from '@material-ui/core';
import MessageBoard from '../components/MessageBoard.js'
import TagSelector from '../components/TagSelector.js'
import Paper from '@material-ui/core/Paper';
import Prompts from '../components/Prompts.js'
class ChargeContainer extends React.Component {

    state = {
        values: {
        
        }
    }

    handleValuesChange = (event, value) => {
        console.log(event.target)
        console.log(value)
        let values = value.map(val => val.tag)
        console.log(values)
        values.map(value => {
            this.setState({
                values: {
                    ...this.state.values, 
                    [value]: value
                }
            })
        })
       
    }

    resetValues = () => {
        this.setState({
            values: {}
        })
    }

    render(){
        console.log(this.state.values)
        const paper = {
            position: 'absolute', 
            right: '100px',
            width: '550px',
            height: '300px',
            backgroundColor: '#7CFD8A',
            boxShadow: '5px 5px #59B263'

        }
        const h3= {
            fontFamily: 'Noto Sans' + "sans-serif",
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
            <MessageBoard reset={this.resetValues} currentUser={this.props.currentUser} values={this.state.values}/>                
                <br></br>
                
                

            <Paper style={paper}>
                <Prompts/>
            </Paper>
                <br></br>
                <br></br>
            <h3 style={h3}>Help us share your positivity with someone who needs it most!</h3>
            <br></br>
            <br></br>
            <TagSelector  handleChange={this.handleValuesChange} />
           

            {/* </Container> */}

            </div>
        )
    }
}

export default ChargeContainer 