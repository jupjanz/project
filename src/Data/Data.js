import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {addTodos, addPosts} from '../actions/index'
import { connect } from 'react-redux'


class Data extends Component {

    render() {
        return (
            <div>
               <h2><Link to={`/users/${this.props.id}/albums`}> Albums </Link></h2>
               <h2><Link to={`/users/${this.props.id}/todos`}> Todo </Link></h2>
               <h2> <Link to={`/users/${this.props.id}/posts`}> Posts </Link> </h2>
            </div>
        )
    }
}


function bindActions(dispatch) {
    return {
    }
}

const mapStateToProps = (state) => ({
    albums : state.getusers.albums
})

export default connect(mapStateToProps,bindActions)(Data)