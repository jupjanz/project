import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  saveSessionId, getMovie } from '../actions/movie'

class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apikey: "",
            movie: null,
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
        console.log('resultGetMovie',resultGetMovie)
        await this.setState({
            movie : resultGetMovie
        })
    }



    render() {
        console.log(this.state.movie && this.state.movie.result);
        
        return (
            <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Movie Search" aria-label="Movie Search" aria-describedby="button-addon2" onChange={this.onChangeSeachMovie} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
              <div>
                {this.state.movie && this.state.movie.results.map((item) => (
                    <ul>
                        <li>
                            {item.title}
                        </li>
                    </ul>
                )
                )}
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