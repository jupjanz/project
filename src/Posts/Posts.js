import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Posts.css'
import {addPosts} from '../actions/index'

class Posts extends Component {

    componentDidMount(){
        this.props.addPosts(this.props.match.params.id)
    }


    render() {
        return (
            <div>
                {this.props.loading ? '' : this.props.posts && this.props.posts.map((data, idx) => (
                    <div className="card width-20rem" key={data.id}>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.body}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        )
    }
}

const bindActions = (dispatch) => {
    return {
        addPosts : (userId) => dispatch(addPosts(userId))
    }
}
const mapStateToProps = (state) => ({
    posts: state.getusers.posts,
    loading: state.loading.loading
})
export default connect(mapStateToProps,bindActions)(Posts)