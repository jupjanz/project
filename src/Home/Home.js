import React, { Component } from 'react'
import {addUsers} from '../actions/index'
import { connect } from 'react-redux'
// import store from '../store'

class Home extends Component {

    componentDidMount() { 
        // const result = this.props.addUsers
    }
     render() {
        return (
            <div>
                Home
            </div>
        ) 
    }
}

function bindActions(dispatch) {
    return {
        addUsers: () => dispatch(addUsers())
    }
}

const mapStateToProps = (state) => ({
        users: state.users
})
export default connect(mapStateToProps,bindActions)(Home)
