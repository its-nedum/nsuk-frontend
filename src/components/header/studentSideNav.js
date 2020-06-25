import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/sidenav.css'

const StudentSideNav = () => {
    return (
        <div>
        <div className="sidenav">
            {/* For medium and small screens */}
            <nav className="navbar navbar-expand-lg navbar-dark d-lg-none sm_sidenav">
                <button className="navbar-toggler menu" type="button" data-toggle="collapse" data-target="#sidenavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    MENU <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="sidenavbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active link_hover">
                        <Link className="nav-link" to="/dashboard"><span className="fa fa-home"></span> Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item link_hover">
                        <Link className="nav-link nedum" to="/payment-status"><span className="fa fa-credit-card"></span> Application Fee</Link>
                    </li>
                    <li className="nav-item link_hover">
                        <Link className="nav-link" to="/student-profile"><span className="fa fa-user-circle"></span> Student Profile</Link>
                    </li>
                    <li className="nav-item link_hover">
                        <Link className="nav-link" to="/student-application"><span className="fa fa-vcard"></span> Post UTME Application</Link>
                    </li>
                    <li className="nav-item link_hover">
                        <Link className="nav-link" to="/print-acknowledgement"><span className="fa fa-print"></span> Print Acknowledgement Slip</Link>
                    </li>
                    <li className="nav-item link_hover">
                        <Link className="nav-link" to="/signout"><span className="fa fa-close"></span> Sign Out</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            {/* For large screens only */}
            <nav className="d-md-none d-sm-none d-none d-lg-block lg_sidenav">
                <ul className="navbar-nav">
                <li className="nav_item active link_hover">
                        <Link className="nav_link" to="/dashboard"><span className="fa fa-home"></span> Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav_item link_hover">
                        <Link className="nav_link" to="/payment-status"><span className="fa fa-credit-card"></span> Application Fee</Link>
                    </li>
                    <li className="nav_item link_hover">
                        <Link className="nav_link" to="/student-profile"><span className="fa fa-user-circle"></span> Student Profile</Link>
                    </li>
                    <li className="nav_item link_hover">
                        <Link className="nav_link" to="/student-application"><span className="fa fa-vcard"></span> Post UTME Application</Link>
                    </li>
                    <li className="nav_item link_hover">
                        <Link className="nav_link" to="/print-acknowledgement"><span className="fa fa-print"></span> Print Acknowledgement Slip</Link>
                    </li>
                    <li className="nav_item link_hover">
                        <Link className="nav_link" to="/signout"><span className="fa fa-close"></span> Sign Out</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default StudentSideNav
