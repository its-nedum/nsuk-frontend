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
                        <div className="row">
                            <div className="col-sm-12 col-md-8">

                            </div>
                            <div className="col-sm-12 col-md-4">
                                <form className="login_form">
                                    <h3>Login</h3>
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                                    </div>
                                <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-key" aria-hidden="true"></i></span>
                                    </div>
                                <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                                </div>
                                <input type="checkbox" /> Remember me
                                <p><Link to="!#">Forgot password?</Link></p>
                                <div className="input-group mb-3">
                                    <input type="submit" className="form-control btn btn-primary" value="Login" />
                                </div>
                                <p>Don't have an account? <Link to="!#">Register</Link></p>
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
