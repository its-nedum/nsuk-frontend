import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import Style from '../styles/Styles.module.css'
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <div className="container-fluid nav_holder">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="logo responsive-img" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className={`nav-item active ${Style.nav_item}`}>
                        <Link className="nav-link" to="/">POST UTME <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className={`nav-item ${Style.nav_item}`}>
                        <Link className="nav-link" to="/instructions">GUIDELINES</Link>
                    </li>
                    <li className={`nav-item ${Style.nav_item}`}>
                        <Link className="nav-link" to="/contact-us">CONTACT US</Link>
                    </li>
                    <li className={`nav-item ${Style.nav_item}`}>
                        <Link className="nav-link" to="/putme/register">REGISTER</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
