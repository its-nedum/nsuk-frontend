import React from 'react'
import Navbar from '../../header/signedInStudent'
import SideNavbar from '../../header/studentSideNav'
import '../../styles/dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="dashboard_banner">
                <div className="row">
                    <div className="col-sm-12 col-md-3 dash_menu">
                        <SideNavbar />
                    </div>
                    <div className="col-sm-12 col-md-9 dash_option">
                        
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Dashboard
