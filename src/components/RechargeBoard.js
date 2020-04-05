import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import charge from '../styling/charge.png'
import TagSelector2 from '../components/TagSelector2.js'
class RechargeBoard extends React.Component {

    state = {
        recharge: false,
        charge: false
    }

    handleClick = () => {
        this.setState({
            recharge: !this.state.recharge
        })
    }

    handleChargeClick = () => {
        this.setState({
            charge: true
        })
    }

    render(){

        const  paper= {
            backgroundColor: 'rgba(255, 237, 135, 1)',
            margin: 'auto',
            maxWidth: 700,
            height: '40vh',
            boxShadow: '5px 5px #BAAD63'
          }
          const button= {
            height: '40px',
            width: '300px',
            background: 'linear-gradient(45deg, #63E2C6 30%, #2A4494 90%)',
            boxShadow: '2px 2px #BAAD63'

        }
          const chargeButton= {
            height: '40px',
            width: '150px',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            boxShadow: '2px 2px #BAAD63'
          }
          const h3= {
              position: 'absolute',
              left: '471px',
              color: 'white'
          }
        return(
            <div>
                <Paper style={paper}>
                    <br></br>
                        <h1 style={{fontSize: '30px'}}>Need To Re-Charge? </h1>
                        <Button
                            onClick={this.handleClick}
                            variant="contained"
                            color="primary"
                            style={button}
                                    
                        >Your personal message awaits!
                        </Button>
                        {this.state.recharge ? <h4 style={{paddingLeft: '20px', paddingRight: '20px'}}>"Here is your personal message sent to you today! Here is your personal message sent to you today! Here is your personal message sent to you today! Here is your personal message sent to you today! Here is your personal message sent to you today! Here is your personal message sent to you today! Here is your personal message sent to you today! Here is your personal message sent to you today! Here is your personal message sent to you today! Here is your personal message sent to you today!"</h4> : null }

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                </Paper>
                        <br></br>
                        <div>
                            <h3 style={{color: 'white'}}>If that helped give you the recharge you needed, press the charge button!
                            </h3>
                            <Button
                                onClick={this.handleChargeClick}
                                variant="contained"
                                color="primary"
                                style={chargeButton}
                                        
                            >
                                {this.state.charge ? 
                                <div> Charge: 1  
                                    <img src={charge} style={{height: '15px', width: '15px'}}></img>
                                </div>
                                :<div>
                                    <img src={charge} style={{height: '15px', width: '15px'}}></img>
                                    Charge
                                </div>}
                            </Button>
                        </div>
                            <br></br>
                            <br></br>
                            <br></br>
                        <div>
                            <h3 style={h3}>Add tags to help filter content that is most suited to your needs!</h3>
                            <TagSelector2 />
                        </div>
                   
                        
            </div>
        )
    }
}

export default RechargeBoard