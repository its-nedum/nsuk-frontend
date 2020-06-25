import React from 'react'
import Navbar from '../../header/signedInStudent'
import SideNavbar from '../../header/studentSideNav'
import '../../styles/dashboard.css'
import '../../styles/payment.css'

const Payment = () => {
    return (
        <div>
            <Navbar />
            <div className="dashboard_banner">
                <div className="row">
                    <div className="col-sm-12 col-md-3 dash_menu">
                        <SideNavbar />
                    </div>

                    <div className="col-sm-12 col-md-9">
                        <div className="row">
                            <div className="col-sm-12 col-md-5 payment_option">
                            <table className="table table-striped">
                            <thead>
                                <tr>
                                <th><h4>Transaction Details</h4></th>
                                </tr> 
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">RRR</th>
                                <td>250326374122</td>
                                </tr>
                                <tr>
                                <th scope="row">Application Fee</th>
                                <td>₦ 2000.00</td>
                                </tr>
                                <tr>
                                <th scope="row">Transaction Status</th>
                                <td>Approved</td>
                                </tr>
                                <tr>
                                <th scope="row">Transaction Id</th>
                                <td>97476256EC-5324</td>
                                </tr>
                                <tr>
                                <th scope="row">Date/Time</th>
                                <td>2020-08-20 14:20:00 PM</td>
                                </tr>
                                <tr>
                                <td><button className="form-control btn btn-primary">Generate RRR</button></td>
                                <td><button className="form-control btn btn-success">Verify</button></td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Payment
