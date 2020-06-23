import React from 'react'
import Navbar from '../header/navbar'
import '../styles/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="banner_container">
                <div className="banner">
                    <div className="container-fluid">
                        <div className="row login_details">
                            <div className="col-sm-12 col-md-8 wlc2">
                                <div className="welcome_note">                                 
                                <h3>Post-UTME Screening Exercise</h3>
                                <p>All candidates (UTME and DIRECT ENTRY) who made Nasarawa State University, Keffi as their first choice of institution as well as those that have changed their most preferred institution to NSUK in the 2020/2021 Unified Tertiary Matriculation Examination (UTME) and have at least Five O'level credit including English and mathematics are eligible to apply for the Post-UTME Screening Exercise.
                                Click here for <Link to="/instructions">INSTRUCTIONS.</Link></p>
                                <p>Application for the Post-UTME Screening Exercise begins on the xxth xxxx, 2020 and ends on the xxth xxxx, 2020.</p>
                                <p>Candidates who do not participate in the Post-UTME Screening Exercise will not be considered for admission.</p>
                                <div className="startBtn"><Link to="/register" className="btn btn-primary">Start Application</Link></div>
                            </div>
                            </div>
                            <div className="col-sm-12 col-md-4 wlc1">
                                <form className="login_form">
                                    <h3>Login</h3>
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
                                <input type="checkbox" /> Remember me
                                <p><Link to="/forget-password">Forgot password?</Link></p>
                                <div className="input-group mb-3">
                                    <input type="submit" className="form-control btn btn-primary" value="Login" />
                                </div>
                                <p>Don't have an account? <Link to="/register">Register Now</Link></p>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
