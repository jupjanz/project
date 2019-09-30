import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  saveSessionId, getMovie } from '../actions/movie'

class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apikey: "",
            movie: [],
            session: {},
            keyword: "",
        }
    }



    async componentDidMount() {
        const API_KEY = "db0d3199c380efdcc5e86fafe0b1c2f6"
        await this.setState({
            apikey: API_KEY
        })
        //    const resultSession = await getSession(API_KEY)
        //    await this.setState({
        //         session : resultSession,
        //     })
    }

    onChangeSeachMovie = async (event) => {
        await this.setState({
            keyword: event.target.value
        })
        const resultGetMovie = await getMovie(this.state.apikey, this.state.keyword)
        await this.setState({
            movie : resultGetMovie
        })
        console.log(this.state.movie)
    }



    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Movie Search" aria-label="Movie Search" aria-describedby="button-addon2" onChange={this.onChangeSeachMovie} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        )
    }
}

const bindActions = () => dispatch => {
    return {
        saveSessionId: (session) => dispatch(saveSessionId(session)),
        getMovie: (apikey, keyword) => dispatch(getMovie(apikey, keyword))
    }
}


const mapStateToProps = () => ({

})

export default connect(mapStateToProps, bindActions)(Movie)