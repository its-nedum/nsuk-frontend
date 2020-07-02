import React from 'react'
import Navbar from '../../header/navbar'
import '../../styles/404.css'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div className="notfound_banner">
                <div className="app flex-row align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="clearfix pt">
                            <h1 className="float-left display-3 mr-4">404</h1>
                            <h4 className="pt-3">Oops! You're lost.</h4>
                            <p className="text-muted">The page you are looking for was not found.</p>
                            </div>
                            <div className="input-prepend input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-search"></i></span>
                            </div>
                            <input id="prependedInput" className="form-control" size="16" type="text" placeholder="What are you looking for?"/>
                            <span className="input-group-append">
                                <Link className="btn btn-info" to='/'>Search</Link>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
