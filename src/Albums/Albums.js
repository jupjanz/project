import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {addAlbums} from '../actions/index'

class Albums extends Component {

    componentDidMount() {
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.albums.map((data,idx) => 
                    <li key={data.id}>
                    {data.title}
                    </li>)}
                </ul>
            </div>
        )
    }
}

const bindActions = (dispatch) => {
    return {
    }
}

const mapStateToProps = state => ({
    albums : state.getusers.albums
})

export default connect(mapStateToProps,bindActions)(Albums)