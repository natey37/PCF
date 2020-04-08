import React from 'react'
import ChargeContainer from './containers/ChargeContainer'
import { Redirect } from "react-router-dom"

class Charge extends React.Component {

    render(){
        return (
            <div>
                {!this.props.currentUser && <Redirect to='/login' />}
                <ChargeContainer currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default Charge 