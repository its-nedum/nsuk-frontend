import React from 'react'
import Navbar from '../../header/signedInStudent'
import '../../styles/dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="dashboard_banner">
                <div className="row">
                    <div className="col-sm-12 col-md-2 dash_menu">

                    </div>
                    <div className="col-sm-12 col-md-10 dash_option">
                    
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Dashboard
