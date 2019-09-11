import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {addAlbums} from '../actions/index'
import { connect } from 'react-redux'


class Data extends Component {

    componentDidMount(){
        this.props.addAlbums(this.props.id)
       
    }

    render() {
        console.log(this.props.albums)
        return (
            <div>
               <h2><Link to={`/users/${this.props.id}/albums`}> Albums </Link></h2>
               <h2><Link to='/'> Todo </Link></h2>
               <h2> <Link to='/'> Posts </Link> </h2>
            </div>
        )
    }
}


function bindActions(dispatch) {
    return {
        addAlbums: (userId) => dispatch(addAlbums(userId))
    }
}

const mapStateToProps = (state) => ({
    albums : state.getusers.albums
})

export default connect(mapStateToProps,bindActions)(Data)