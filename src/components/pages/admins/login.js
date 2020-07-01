import React from 'react'
import Navbar from '../../header/navbar'
import {Link} from 'react-router-dom'
import '../../adminStyles/login.css'

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="adminlogin_banner">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-sm-12 col-md-4">
                        <form className="adminlogin_form">
                            <h3>Admin Login</h3>
                            <p>Sign In to your account.</p>
                        <div className="input-group mb-3">   
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><span className="fas fa-envelope"></span></span>
                            </div>
                        <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><span className="fa fa-key" aria-hidden="true"></span></span>
                            </div>
                        <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        
                        <div className="input-group mb-3">
                            {/* <input type="submit" className="form-control btn btn-primary" value="Login" /> */}
                            <Link to="/admin/dashboard" className="form-control btn btn-success">Login</Link>
                        </div>
                        
                        </form>
                    </div>
                    <div className="col-md-4"></div>
            </div>
            </div>
        </div>
    )
}

export default Login
