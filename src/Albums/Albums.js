import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAlbums } from '../actions'

class Albums extends Component {

    componentDidMount() {
        this.props.addAlbums(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                 {this.props.loading ? '' : <ul>
                    {this.props.albums.map((data, idx) =>
                        <li key={data.id}>
                            {data.title}
                        </li>)}
                </ul>}
                
            </div>
        )
    }
}

const bindActions = (dispatch) => {
    return {
        addAlbums: (userId) => dispatch(addAlbums(userId))
    }
}

const mapStateToProps = state => ({
    albums: state.getusers.albums,
    loading: state.loading.loading
})

export default connect(mapStateToProps, bindActions)(Albums)