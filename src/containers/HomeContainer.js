import React from 'react'
import { Container, isWidthDown, Paper } from '@material-ui/core';
import BulletinBoard from '../components/BulletinBoard.js'
import home_pin from '../styling/home_pin.png'
import pin_flipped from '../styling/pin_flipped.png'
import Box from '@material-ui/core/Button';
import HomeFilter from '../components/HomeFilter.js'
import Grid from '@material-ui/core/Grid';
import '../styling/index.css'
class HomeContainer extends React.Component {

    state = {
        allmessages: [],
        messages: [], 
        todaysMessages: [],
        filter: null, 
        saved: [],
        charged: []
        
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/sentcharges')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            let sortedMessages = resp.sort((a,b) => a.created_at > b.created_at ? 1 : -1  ).reverse().slice(0, 20)
            this.setState({
                todaysMessages: sortedMessages,
                messages: sortedMessages,
                allmessages: resp
                
            })
        })
    }

    

    deletePost = (event, id) => {
        console.log('in delete post')
        event.preventDefault()
        console.log(id)
        fetch(`http://localhost:3000/sentcharges/${id}`, {
            method: "DELETE", 
            headers: {
                'Content-Type': 'application/json'
                    }
        }).then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            let newSortedMessages = this.state.messages.filter(message => message.id !== id)
            console.log(newSortedMessages)
            this.setState({
                messages: newSortedMessages
            })
        })
    }

    removeFromFavorites = (message) => {
        // console.log( "hi from removefromfavorites")
        // console.log(message)
        // console.log(message.id) 
        // console.log(message.favorites)

        if(message.favorites.length > 0 ){
            let fav = message.favorites.filter(fav => fav.sentcharge_id === message.id && fav.user_id === parseInt(localStorage.user_id))
            // console.log(fav)
            let favID = fav[0].id
            // console.log(favID)
            fetch(`http://localhost:3000/favorites/${favID}`, {
            method: "DELETE", 
            headers: {
                'Content-Type': 'application/json'
                    }
            }).then(resp => resp.json()).then(resp => {
                // console.log(resp)
                 let removed = this.state.messages.filter(fav => fav.id !== message.id)
                 let removedID = this.state.saved.filter(id => id !== message.id)
                //  console.log(removed)
                 this.setState({
                     messages: removed,
                     saved: removedID
                 })
            
            })
        }
        
  
  
        
      }

    // forceState = (messages) => {
    //     this.setState({
    //         messages: messages
    //     })
    // }

    handleFilter =(event) => {
        console.log(event.target.value)
        this.setState({
            filter: event.target.value
        }, () => {
            if(event.target.value === 'alltime'){
                fetch('http://localhost:3000/sentcharges')
                    .then(resp => resp.json())
                    .then(resp => {
                        let sortedTopMessages = resp.sort((a,b) => a.likes > b.likes ? 1 : -1).reverse().slice(0,20)
                        console.log(sortedTopMessages)
                        
                    //    this.forceState(sortedTopMessages)
                        this.setState({
                            messages: sortedTopMessages
                        })
                    })
                

            } else if(event.target.value === 'recent'){
                this.setState({
                    messages: this.state.todaysMessages
                })
            } else if(event.target.value === 'favorites'){
                fetch('http://localhost:3000/favorites')
                .then(resp => resp.json())
                .then(resp => {
                    console.log(resp)
                    


                    let respWithCorrectID = resp.filter(message => message.user_id === parseInt(localStorage.user_id))
                    console.log(respWithCorrectID)
                    let favorite_ids = respWithCorrectID.map(fav => fav.sentcharge_id)
                    console.log(favorite_ids)

                    fetch('http://localhost:3000/sentcharges')
                    .then(resp => resp.json())
                    .then(resp => {
                        let favs = resp.filter(message => favorite_ids.includes(message.id) )
                        // let myFavs = favs.filter(message => message.user_id === parseInt(localStorage.user_id))
                        console.log(favs)
                        this.setState({
                            messages: favs
                        })
                    })
                   
                })
            }
        }  
    )}  

    handleFavs = (id) => {
        this.setState({
            saved: [...this.state.saved, id]
        })
    }

    handleCharge = (id) => {
        this.setState({
            charged: [...this.state.charged, id]
        })
    }
   
        // console.log("im in handlefilter")
        // console.log(event.target.value)
        // this.setState({
        //     filter: {
        //         ...this.state.filter,
        //         [event.target.name]: event.target.value
        //     }
        // })

    

    render(){
        console.log(this.state.charged)
        const container = {
            height: '70vh',
            overflow: 'auto',
            background: '#6699CC',
            boxShadow: '5px 5px #4B7095',

        }
        const box = {
            width: '500px',
            boxShadow: '5px 5px #40907F',
            backgroundColor: "#63E2C6",
            cursor: 'default'

                }
        const row = {
            display: 'flex'
        }
        const column = {
            flex: '33%', 
            padding: '5px'
        }
        const h1 = {
            fontFamily: 'Noto Sans' + "sans-serif",
            // fontFamily: 'soleil' + 'sansSerif',
            // fontStyle: 'normal',
            // fontWeight: 300,
            fontSize: '40px',
            color: 'white',
            margin: '0'
        }
               
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Box disableRipple={true} style={box}>
                    
                    <h1 style={h1}>
                        {/* <img style={{width: '30px', height: '30px', marginRight: '55px'}} src={pin_flipped}></img> */}
                        
                        
                        Bulletin Board
                        
                        
                        {/* <img style={{width: '30px', height: '30px', marginLeft: '55px'}} src={home_pin}></img> */}
                    </h1>
                
                </Box>
            <br></br>
            <br></br>
            <br></br>
            <Container  
            style={container} maxWidth="md">
            
                {/* <br></br>
                <div>
                     <img style={{width: '40px', height: '40px', marginRight: '415px'}} src={pin_flipped}></img>

                      <img style={{width: '40px', height: '40px', marginLeft: '415px'}} src={home_pin}></img>
                      <HomeFilter></HomeFilter>

                </div> */}

                <div style={row}>
                   <div style={column}>
                        <img style={{width: '40px', height: '40px', marginRight: '280px'}} src={pin_flipped} alt="pinleft" />
                    </div>
                    <div style={column}>
                        <HomeFilter values={this.state.filter} onChange={this.handleFilter}></HomeFilter>
                    </div>
                    <div style={column}>
                        <img style={{width: '40px', height: '40px', marginLeft: '280px' }} src={home_pin} alt="pinright"/>
                    </div>
                </div>

                {this.state.messages.map((message, index) => <BulletinBoard key={index}message={message} delete={this.deletePost} filter={this.state.filter} removeFromFavorites={this.removeFromFavorites} saved={this.state.saved}handleFavs={this.handleFavs} handleCharge={this.handleCharge} charged={this.state.charged}/>)}
                {/* <h1 style={{textDecoration: 'underline'}}>Bulletin Board</h1> */}
                {/* <BulletinBoard/>
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
                <BulletinBoard/> */}
              
            </Container>
            </div>
        )
    }
}

export default HomeContainer 