import React from 'react'
import AdminNavbar from '../../header/adminNavbar'
import '../../adminStyles/addAdmin.css'

const AddAdmin = () => {
    return (
        <div>
        <AdminNavbar />
            <div className="add_banner">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-sm-12 col-md-4 add_form">
                        <form>
                        <h3>Register An Admin</h3>
                        <p>Create an account for new admin to help screen Post-UTME candidates</p>
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
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-envelope"></span></span>
                                    </div>
                                <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
                                </div>
                            
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-key"></span></span>
                                    </div>
                                <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                                </div>    
                            </div>
                            <div className="row">
                                <div className="input-group mb-3">
                                    <input type="submit" className="form-control btn btn-success" value="Create Account" />
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

export default AddAdmin
