import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import charge from '../styling/charge.png'
import TagSelector2 from '../components/TagSelector2.js'
import { Link } from 'react-router-dom'
class RechargeBoard extends React.Component {

    state = {
        recharge: false,
        charge: false,
        todaysMessage: '',
        filteredResps: [],
        tags: []
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
            let filteredResps = newResps.filter(sentcharge => sentcharge.created_at === thisDateDay)
           
                // if(this.state.tags.length > 0 ){

                // }
              
            
            let todaysMessage = this.sample(filteredResps)
            console.log(todaysMessage)
            this.setState({
                todaysMessage: todaysMessage.message,
                filteredResps: filteredResps
            })
        })
    }

    handleValuesChange = (event, value) => {
        console.log(event.target)
        console.log(value)
        let values = value.map(val => val.tag)
        console.log(values)
        values.map(value => {
            this.setState({
                tags: [...this.state.tags, value]
            }, () => {
                let matchedTags = this.state.filteredResps.filter(sentcharge => sentcharge.chargetags.length > 0)
                let sentchargeTags = this.state.filteredResps.map(sentcharge => sentcharge.chargetags)
                let nonEmptySentChargeTags = sentchargeTags.filter(arr => arr.length > 0)
                let matching = []
                let mapForMatchingTags = nonEmptySentChargeTags.forEach( arr => {
                    console.log(arr)
                    arr.forEach(chargetag => {
                        console.log(chargetag)
                        console.log(chargetag.tagtype)
                        console.log(this.state.tags)
                        if(this.state.tags.includes(chargetag.tagtype)){
                            console.log("got inside")
                            matching.push(chargetag)
                        }
                    })
                })
                let matchingIDs = matching.map(chargetag => chargetag.sentcharge_id)
                let matchingSentCharge = this.state.filteredResps.filter(sentcharge => 
                    matchingIDs.includes(sentcharge.id))
                let newMessage = this.sample(matchingSentCharge).message
                this.setState({
                    todaysMessage: newMessage
                })
                // this.setState({
                //     todaysMessage: this.sample(matchingSentCharge).message
                // })
                // console.log(matchedTags)
                // console.log(sentchargeTags)
                console.log(nonEmptySentChargeTags)
                // console.log(mapForMatchingTags)
                console.log(matching)
                console.log(matchingIDs)
                console.log(this.state.filteredResps)
                console.log(matchingSentCharge)
                console.log(newMessage)
                console.log(this.state.todaysMessage)

            })
        })
        
       
        

      
        // let matchedTags = this.state.filteredResps.filter(sentcharge => {
        //     console.log(sentcharge.chargetags)
        //     if(this.state.tags.length === 0){
        //         console.log('HI im in first conditional')
        //         return sentcharge
                
        //     } else if (this.state.tags.length > 0 && !sentcharge.chargetags){
        //         console.log('HI im in second conditional')

        //         return sentcharge
        //     } else {
        //         let types = sentcharge.chargetags.map(tag => tag.type)
        //         console.log('HI im in third conditional')

        //         console.log(types)
        //         console.log(sentcharge)
        //         console.log(sentcharge.chargetags)
        //         types.forEach((type) => {
        //             if(this.state.tags.includes(type)){
        //                 return sentcharge
        //             }
        //         })
        //     }
            // console.log(matchedTags)
        
       
    }

    matchTags = () => {

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

    handleClick = () => {
        this.setState({
            recharge: true
        })
    }

    handleChargeClick = () => {
        this.setState({
            charge: true
        })
    }

    render(){
        // console.log(this.state.tags)
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
          const chargeButton= {
            fontFamily: 'Noto Sans' + "sans-serif",

            height: '40px',
            width: '150px',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            boxShadow: '2px 2px #BAAD63'
          }
          const h3= {
            fontFamily: 'Noto Sans' + "sans-serif",

              position: 'absolute',
              left: '500px',
              color: 'white'
          }
          const style = {
            fontFamily: 'Noto Sans' + "sans-serif",

            textAlign: 'center',
            width: 500, 
            maxHeight: "200px",
            minHeight: "120px",
            resize: "none",
            padding: "9px",
            boxSizing: "border-box",
            fontSize: "15px",
            backgroundColor: '#FFFFFF'
          };
        return(
            <div>
                <Paper style={paper}>
                    
                        <h1 style={{fontSize: '30px', paddingTop: '30px',              fontFamily: 'Noto Sans' + "sans-serif"}}>Need To Re-Charge? </h1>
                        <Button
                            onClick={this.handleClick}
                            variant="contained"
                            color="primary"
                            style={button}
                                    
                        >Your personal message awaits!
                        </Button>
                        <br></br>
                        <br></br>
                        <textarea
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
                        <br></br>
                        <div>
                            <h3 style={{color: 'white', fontFamily: 'Noto Sans' + "sans-serif"}}>If that helped give you the recharge you needed, press the charge button!
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
                            <Link to='/charge' style={{color: 'white', fontSize: '15px', fontFamily: 'Noto Sans' + "sans-serif"}}>Send a charge!</Link>
                            <br></br>
                        <div>
                            <h3 style={h3}>Add tags to help filter content that is most suited to your needs!</h3>
                            
                            <TagSelector2 handleChange={this.handleValuesChange}/>
                        </div>
                   
                        
            </div>
        )
    }
}

export default RechargeBoard