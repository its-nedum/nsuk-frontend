import React from 'react'
import Navbar from '../../header/navbar'
import '../../styles/forgetpassword.css'

const ForgetPassword = () => {
    return (
        <div>
            <Navbar />
            <div className="forget_banner">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className=" col-sm-12 col-md-4">
                        <form className="forget_form">
                        <h3>Reset Password</h3>
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="input-group mb-3">   
                                <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-envelope"></span></span>
                                    </div>
                                <input type="email" className="form-control" placeholder="Enter your email address" aria-label="email" aria-describedby="basic-addon1" />
                            </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="input-group mb-3">
                                    <input type="submit" className="form-control btn btn-primary" value="SUBMIT" />
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>   
        </div>
    )
}

export default ForgetPassword
