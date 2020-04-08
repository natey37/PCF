import React from 'react'
import HomeContainer from './containers/HomeContainer'
import { Redirect } from "react-router-dom"

class Home extends React.Component {

    render(){
        return(
            <div >
                {!this.props.currentUser && <Redirect to='/login' />}
                <HomeContainer/>
            </div>
        )
    }
}

export default Home 