import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {addUsers} from '../actions/index'
import Data from '../Data/Data'


class Users extends Component {

    componentDidMount() {
        this.props.addUsers()
    }

    checkParam = (param,id) => {
        if(parseInt(param) === id) {
            return <Data id={this.props.match.params.id} />
        } 
    }

    render() {
        return (
            <div>
                <h2> Users </h2>
                <ul>
                    {this.props.users && this.props.users.map((data, idx) =>
                        (
                            <li key={data.id}><Link to={`/users/${data.id}`}>{data.name}</Link>
                            {this.checkParam(this.props.match.params.id,data.id)}
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}

const bindActions = (dispatch) => {
    return{
        addUsers: () => dispatch(addUsers())
    }
}

const mapStateToProps = (state) => ({
    users: state.getusers.users
})

export default connect(mapStateToProps,bindActions)(Users)