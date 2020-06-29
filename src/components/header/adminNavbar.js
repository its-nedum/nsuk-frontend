import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import Style from '../styles/Styles.module.css'
import logo from '../../images/logo.png'

const AdminNavbar = () => {
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
                        <Link className="nav-link" to="/admin/dashboard">Dashboard <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className={`nav-item ${Style.nav_item}`}>
                        <Link className="nav-link" to="/admin/add-admin">Add Admin</Link>
                    </li>
                    <li className={`nav-item ${Style.nav_item}`}>
                        <Link className="nav-link" to="/admin/registered-candidates">Registered Candidates</Link>
                    </li>
                    <li className={`nav-item ${Style.nav_item}`}>
                        <Link className="nav-link" to="/admin/screened-candidates">Screened Candidates</Link>
                    </li>
                    <li className={`nav-item ${Style.nav_item}`}>
                        <Link className="nav-link" to="/admin/sucessful-candidates">Successful Candidates</Link>
                    </li>
                    <li className={`nav-item `}>
                        <Link className="nav-link btn btn-success" to="/admin/screening">Screen Candidate</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar