import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import charge from '../styling/charge.png'
import TagSelector2 from '../components/TagSelector2.js'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';
import thunder from '../styling/thunder.png'
class RechargeBoard extends React.Component {

    state = {
        recharge: false,
        charge: false,
        todaysMessage: '',
        filteredResps: [],
        tags: [], 
        background: false,
        swap: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/sentcharges')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
              //map created_at to number of month 
              let newResps = resp.map(sentcharge => 
                { return {...sentcharge, created_at: this.convertToDay(sentcharge.created_at)}}
            )
              let thisDate = new Date()
              let thisDateDay = thisDate.getDate()
           
                //filter sentcharges that match todays number of month
            let filteredResps = newResps.filter(sentcharge => sentcharge.created_at === thisDateDay && sentcharge.user_id !== parseInt(localStorage.user_id))
            
            //if there has been a response take one randomly else give message
            if(filteredResps.length > 0 ){
                let todaysMessage = this.sample(filteredResps)
                this.setState({
                    todaysMessage: todaysMessage.message,
                    filteredResps: filteredResps
                })
            } else {
                this.setState({
                    todaysMessage: 'No one has written a message yet today! Check back soon!',
                    filteredResps: filteredResps
                })
            }
            
        })
    }
    //if they add a tag
    handleValuesChange = (event, value) => {
        let values = value.map(val => val.tag)
        //add the tag to the tags state
        values.map(value => {
            this.setState({
                tags: [...this.state.tags, value]
            }, () => {
                // let matchedTags = this.state.filteredResps.filter(sentcharge => sentcharge.chargetags.length > 0)
                
                //map the responses associated tags
                let sentchargeTags = this.state.filteredResps.map(sentcharge => sentcharge.chargetags)
                console.log(sentchargeTags)
                //filter the responses with tags
                let nonEmptySentChargeTags = sentchargeTags.filter(arr => arr.length > 0)
                let matching = []
                //if the tags they selected are in included in the reponses tags then put it in matching
                let mapForMatchingTags = nonEmptySentChargeTags.forEach( arr => {
                    arr.forEach(chargetag => {
                        if(this.state.tags.includes(chargetag.tagtype)){
                            matching.push(chargetag)
                        }
                    })
                })
                //get the response ids
                let matchingIDs = matching.map(chargetag => chargetag.sentcharge_id)
                //filter to make sure its not written by this user
                let matchingSentCharge = this.state.filteredResps.filter(sentcharge => 
                    matchingIDs.includes(sentcharge.id))
                    //choose a random response and set in state
                if(matchingSentCharge.length > 0){
                    let newMessage = this.sample(matchingSentCharge).message
                    this.setState({
                        todaysMessage: newMessage
                    })
                }
            })
        })
       
    }


    sample(array) {
        return array[Math.floor ( Math.random() * array.length )]
      }

    convertToDay = (stringDate) => {
        let parsedDate = Date.parse(stringDate)
        let newDate = new Date(parsedDate)
        let number_of_month = newDate.getDate()
        return number_of_month
    }

    handleBackgroundChange = () => {
        this.setState({
            background: true 
        })
    }
    handleClick = () => {
        this.handleSwap()
        this.setState({
            recharge: true
        })
    }

    handleBothClicks = () => {
        this.handleChargeClick()
        this.handleBackgroundChange()
    }

    handleChargeClick = () => {
        this.setState({
            charge: true
        })
    }

    handleSwap = () => {
        this.setState({
            swap: true
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
            fontFamily: 'Noto Sans' + "sans-serif",

            height: '40px',
            width: '300px',
            background: 'linear-gradient(45deg, #63E2C6 30%, #2A4494 90%)',
            boxShadow: '2px 2px #BAAD63'

        }
        const button2= {
            fontFamily: 'Noto Sans' + "sans-serif",

            height: '40px',
            width: '300px',
            background: 'linear-gradient(45deg, #2A4494 30%, #63E2C6 90%)',
            boxShadow: '2px 2px #BAAD63'

        }
          const chargeButton= {
            fontFamily: 'Noto Sans' + "sans-serif",

            height: '40px',
            width: '150px',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            boxShadow: '2px 2px #BAAD63',
            color: 'black'
          }
          const h3= {
            fontFamily: 'Noto Sans' + "sans-serif",

              position: 'relative',
            
              color: 'white', 
              cursor: 'default'

          }
          const style = {
            fontFamily: 'Noto Sans' + "sans-serif",
            fontWeight: 'bold',
            textAlign: 'center',
            width: 500, 
            maxHeight: "200px",
            minHeight: "150px",
            resize: "none",
            padding: "9px",
            boxSizing: "border-box",
            fontSize: "15px",
            backgroundColor: '#FFFFFF', 
            cursor: 'default'

          };
          const   button1= {
            fontFamily: 'Noto Sans' + "sans-serif",
      
            height: '40px',
            width: '150px',
            background: 'linear-gradient(45deg, #F8FC00 30%, #FF8E53 90%)',
            boxShadow: '2px 2px #BAAD63',
            color: 'black'
        }
        return(
            <div>
                <Paper style={paper}>
                    
                        <h1 style={{fontSize: '30px', paddingTop: '30px',              fontFamily: 'Noto Sans' + "sans-serif",cursor: 'default'}}>Need to Recharge? </h1>
                        <Tooltip title='Choose from the tags below to receive a message that is meant just for you!'>
                            <Button
                                onClick={this.handleClick}
                                variant="contained"
                                color="primary"
                                style={this.state.swap ? button2 : button}
                                        
                            >Your personal message awaits!
                            </Button>
                        </Tooltip>
                        <br></br>
                        <br></br>
                        <textarea
                            disabled='true'
                            spellcheck="false"
                            style={style}
                            ref={c => (this.textarea = c)}
                            placeholder="Spread the Positive Charge! Need a prompt? Click Below!"
                            rows={1}
                            value={this.state.recharge ? this.state.todaysMessage : "Click the button to see your message!"}
                        />
                        {/* {this.state.recharge ? <h4 style={{paddingLeft: '20px', paddingRight: '20px'}}>{this.state.todaysMessage}</h4> : null } */}

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                </Paper>
            
                        <h3 style={h3}>Add tags to help filter content that you would like to see today!</h3>
                        <div>
                            <TagSelector2 handleChange={this.handleValuesChange}/>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            
                            
                        </div>
                            <br></br>
                            <br></br>
                            <Link to='/charge' style={{color: 'white', fontSize: '15px', fontFamily: 'Noto Sans' + "sans-serif"}}>Send a charge!
                            <img style={{height: '20px', width: '20px'}} src={thunder}></img>
                            </Link>
                            
                            <br></br>
                       
                   
                        
            </div>
        )
    }
}

export default RechargeBoard