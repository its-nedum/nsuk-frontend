import React from 'react'
import Navbar from '../../header/navbar'
import '../../styles/404.css'
import errror from '../../../images/404.gif'

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div className="notfound_banner">
                <div className="container">
                    <div className="row">
                    <div className="imgz">
                        <div className="col-sm-12 col-md-4">
                            <img src={errror} alt="not found" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
