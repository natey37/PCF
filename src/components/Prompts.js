import React from 'react'
import Button from '@material-ui/core/Button';

class Prompts extends React.Component {

    state = {
        showPrompt: false 
    }

    handleClick = () => {
        this.setState({
            showPrompt: !this.state.showPrompt
        })
    }
    
    render() {
        const button= {
            height: '40px',
            width: '300px',
            background: 'linear-gradient(45deg, #63E2C6 30%, #2A4494 90%)',
            boxShadow: '2px 2px #BAAD63'
        }
        return(

            <div>
                <h2>Tell a personal story, share an idea, tell a funny joke!</h2>
                <Button
                    onClick={this.handleClick}
                    variant="contained"
                    color="primary"
                    style={button}
                            
                >Click for Daily Prompt!
                </Button>
                {this.state.showPrompt ? <h4>Tell a story about a time when you made it through a hard time. Need to see how long a prompt can be before it looks bad, it can have this many words</h4>: null}
            </div>
        )
    }

}

export default Prompts