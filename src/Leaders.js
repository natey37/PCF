import React from 'react'
import LeadersContainer from './containers/LeadersContainer'
import { Redirect } from "react-router-dom"

class Leaders extends React.Component {

    render(){
        return (
            <div>
                {!this.props.currentUser && <Redirect to='/login' />}
                <LeadersContainer/>
            </div>
        )
    }
}

export default Leaders
