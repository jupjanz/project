import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-color">
                    <div className="navbar-brand"> <Link to="/" className="link"> React </Link></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <div className="nav-link"> < Link to="/" className="link"> Home </Link> <span className="sr-only">(current)</span></div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link"> <Link to ="/users" className="link"> User </Link> </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link"> <Link to ="/map" className="link"> Map </Link> </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link"> <Link to ="/movie" className="link"> Movie </Link> </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
 

export default Header