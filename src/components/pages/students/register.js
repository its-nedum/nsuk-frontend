import React from 'react'
import Navbar from '../../header/navbar'
import '../../styles/register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="register_banner">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-sm-12 col-md-4">
                        <form className="register_form">
                            <div className="row">
                            <h3>Register</h3>
                            <p>Create your account to start your application.</p>
                            </div>
                            <div className="row">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-user-circle"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="First Name" aria-label="firstname" aria-describedby="basic-addon1" />
                                </div>
                            
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-user-circle"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="Last Name" aria-label="lastname" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-user-circle"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="Middle Name (optional)" aria-label="middlename" aria-describedby="basic-addon1" />
                                </div> */}
                            
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-registered"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="JAMB Registration Number" aria-label="jambno" aria-describedby="basic-addon1" />
                                </div>   
                            </div>
                            <div className="row">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-envelope"></span></span>
                                    </div>
                                <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
                                </div>
                            
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-phone"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="Telephone" aria-label="telephone" aria-describedby="basic-addon1" />
                                </div>    
                            </div>
                            <div className="row">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-key"></span></span>
                                    </div>
                                <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                                </div>
                            
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-key"></span></span>
                                    </div>
                                <input type="password" className="form-control" placeholder="Confirm Password" aria-label="confirmpassword" aria-describedby="basic-addon1" />
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="input-group mb-3">
                                        {/* <input type="submit" className="form-control btn btn-success" value="Register" /> */}
                                        <Link to="/" className="form-control btn btn-success">Register</Link>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>  
                            </div>
                            
                            <p>Already have an account? <Link to="/">Login Here</Link></p>
                            
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Register
