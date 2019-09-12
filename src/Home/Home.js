import React, { Component } from 'react'
import bp from '../image/bp.jpg'


class Home extends Component {

    componentDidMount() {
    }
    render() {
        return (
            <div>
                <img className="width-100per bg-center" src={bp} alt="bp" />
                Home
                {/* <div className="form-login">
                <h1 className="font-white">Login</h1>
                    <label for="email"><b className="font-white">Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                    <label for="psw"><b className="font-white">Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button type="submit" class="btn">Login</button>
                </div> */}
                <div className="form-home">
                    <h1 className="home-title">Launch on Time,<br />
                        look on Trend.
                    </h1>
                    <h3 className="home-body">Save countless hours of design and development and ship <br/>
                    performance sites with killer lock</h3>
                </div>
            </div>
        )
    }
}

export default (Home)
