import React from 'react'
import FeelingsContainer from './containers/FeelingsContainer'
import { Redirect } from "react-router-dom"

class Feelings extends React.Component {

    render(){
        return (
            <div>
                {!this.props.currentUser && <Redirect to='/login' />}
                <FeelingsContainer/>
            </div>
        )
    }
}

export default Feelings 