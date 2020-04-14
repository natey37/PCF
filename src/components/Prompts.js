import React from 'react'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class Prompts extends React.Component {

    state = {
        showSeriousPrompt: false, 
        showPrompt: false,
        prompt: '',
        seriousPrompt: '', 
        swapSerious: false,
        swapSilly: false 
    }

    componentDidMount() {
        fetch('https://ineedaprompt.com/dictionary/default/prompt?q=adj+noun+verb+verb+noun+location')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.english)
            this.setState({
                prompt: resp.english
            })
        })

        this.setState({
            seriousPrompt: this.sample(this.prompts)
        })
    }
    prompts = [
        "What is something that always puts you in a good mood?",
        "What is the best way to lift someone else’s spirits?", 
        "Do you believe that setting a good intention for your day can help you have a better day? Why or why not?",
        "Imagine your perfect day and write about what it would look like.",
        "Write about a time when a situation that seemed bad turned out okay in the end.",
        "Who is the most positive person you know? How do you feel when you are around him or her?",
        "What are a few small things you could do to have a more positive attitude?",
        "What is your favorite thing about yourself? Write about how it impacts your life.",
        "What is the nicest thing someone has ever said about you? How did it make you feel?",
        "What would you do if your best friend needed to be cheered up?",
        "It’s only human to make mistakes! Write about a time when you could have used this reminder.",
        "What can you do today to make someone else’s day a little better?",
        "People say, “Every cloud has a silver lining.” What does this phrase mean to you?", 
        "What do you like to do to make yourself feel better when you’re feeling down? Why?",
        "What inspires you to be a better person? Why?",
        "Who can you turn to when you need advice or support? How will that person help you?",
        "What is one negative thing you could easily eliminate from your life?",
        "Think of one nice thing you can do for a stranger today. Then, write about what you will do.",
        "Write about a time when you used positive thinking to reframe a negative situation.",
        "Think of something that scares you. Then, consider a reason you don’t need to be scared of it and write about your thoughts.",
        "What is one healthy habit you could maintain each day that would have a positive effect on your life?",
        "People say, “Laughter is the best medicine.” What is something that always makes you laugh?  Does it make you feel better when you are upset?",
        "Think of something that has bothered you lately. Do you think you will still care about it in a month?  Or in a year?  Why or why not?"

    ]

    handleClick = () => {
        this.handleSillySwap()
        this.setState({
            showPrompt: true
        })
    }

    handleSeriousClick = () => {
        this.handleSeriousSwap()
        this.setState({
            showSeriousPrompt: true
        })
    }

    sample(array) {
        return array[Math.floor ( Math.random() * array.length )]
      }

    handleSillySwap = () => {
        this.setState({
            swapSilly: true
        })
    }

    handleSeriousSwap = () => {
        this.setState({
            swapSerious: true
        })
    }
    
    render() {
        const button= {
            fontFamily: 'Noto Sans' + "sans-serif",
            height: '40px',
            width: '150px',
            background: 'linear-gradient(45deg, #9358FA 30%, #FC3E24 90%)',
            boxShadow: '2px 2px #59B263',
            fontSize: '15px',
            fontStyle: 'italic'
        }
        const button2= {
            fontFamily: 'Noto Sans' + "sans-serif",
            height: '40px',
            width: '150px',
            background: 'linear-gradient(45deg, #FC3E24 30%, #9358FA 90%)',
            boxShadow: '2px 2px #59B263',
            fontSize: '15px',
            fontStyle: 'italic'
        }
        const button1= {
            fontFamily: 'Noto Sans' + "sans-serif",
            height: '40px',
            width: '150px',
            background: 'linear-gradient(45deg, #10B642 30%, #1922E8 90%)',
            boxShadow: '2px 2px #59B263',
            fontSize: '15px',
            fontWeight: 'bold'
        }
        const button3= {
            fontFamily: 'Noto Sans' + "sans-serif",
            height: '40px',
            width: '150px',
            background: 'linear-gradient(45deg, #1922E8 30%, #10B642 90%)',
            boxShadow: '2px 2px #59B263',
            fontSize: '15px',
            fontWeight: 'bold'
        }

        const row= {
            display: 'flex'
        }
        const column= {
            flex: '33%', 
            // padding: '5px'
        }
        return(

            <div>
                <h1 style={{fontFamily: 'Noto Sans' + "sans-serif"}}>Click for Daily Prompt! </h1>
                <div style={row}>
                    <div style={column}>
                        <Tooltip title="This will create a randomly generated silly writing prompt for you!">
                            <Button
                                onClick={this.handleClick}
                                variant="contained"
                                color="primary"
                                style={this.state.swapSilly ? button2 : button}
                                        
                            >Silly
                            </Button>
                        </Tooltip>
                    </div>
                    <div style={column}>
                        <Tooltip style={{textAlign: "center"}}title="This will give you a daily reflective prompt to write about and share!">
                            <Button
                                onClick={this.handleSeriousClick}
                                variant="contained"
                                color="primary"
                                style={this.state.swapSerious ? button3 : button1}
                                        
                            >Serious
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            
        {this.state.showPrompt  ? <h4 style={{marginRight: '20px', marginLeft: '20px', fontStyle: 'italic', fontFamily: 'Noto Sans' + "sans-serif", fontSize: '17px'}}>{this.state.prompt}</h4>: null}
        {this.state.showSeriousPrompt ? <h4 style={{marginRight: '20px', marginLeft: '20px', fontWeight: 'bold', fontFamily: 'Noto Sans' + "sans-serif", fontSize: '17px'}}>{this.state.seriousPrompt}</h4>: null}

        {/* <div className={classes.row} >
            <div className={classes.column}>
                <Typography  style={{color: '#FFED87'}} variant="h6" noWrap>
                    Positively Charged       
                </Typography>
            </div>
            {props.currentUser === null ? null : 
                <div className={classes.column}>
                <Typography  style={{color: '#FFED87', marginLeft: '900px'}} variant="h6" noWrap>
                    Welcome {props.currentUser.username}  
                </Typography>
            </div> */}

            </div>
        )
    }

}

export default Prompts