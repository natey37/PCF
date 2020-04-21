import React from 'react'
import RechargeContainer from './containers/RechargeContainer'
import { Redirect } from "react-router-dom"

class Recharge extends React.Component {

    render(){
        return (
            <div>
                {!this.props.currentUser && <Redirect to='/login' />}
                <RechargeContainer />
            </div>
        )
    }
}

export default Recharge 