import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodos } from "../actions/index";


class Todos extends Component {
    render() {
        this.props.addTodos(this.props.match.params.id)

        return (
            <div>
                {this.props.todos.map((data, idx) =>
                    <li key={data.id}>
                        {data.title}
                    </li>)}
            </div>
        )
    }
}

const bindActions = (dispatch) => {
    return {
        addTodos: (userId) => dispatch(addTodos(userId))
    }
}
const mapStateToProps = state => ({
    todos: state.getusers.todos,
    loading: state.loading.loading
})


export default connect(mapStateToProps, bindActions)(Todos)