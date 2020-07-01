import React from 'react'
import AdminNavbar from '../../header/adminNavbar'
import '../../adminStyles/downloads.css'
import {Link} from 'react-router-dom'
import Pagination from './pagination'

const Downloads = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="downloads_banner">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-sm-12 col-md-8">
                        <div className="download_candidates">
                            <h3 className="text-warning">Download Center</h3>
                            <hr className="hr"/>

                            <div className="download_table">
                            <table className="table table-striped table-bordered table-warning table-sm">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Document Name</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>All Registered Candidates</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                </tr>
                                
                                <tr>
                                <th scope="row">2</th>
                                <td>All Screened Candidates</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>All Admitted Candidates</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Computer Science Department</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>Economics Department</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                </tr>
                                <tr>
                                <th scope="row">6</th>
                                <td>English Department</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                </tr>
                                <tr>
                                <th scope="row">7</th>
                                <td>Anatomy Department</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                
                                </tr>
                                <tr>
                                <th scope="row">8</th>
                                <td>Biology Education Department</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                
                                </tr>
                                <tr>
                                <th scope="row">9</th>
                                <td>Estate Management</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                
                                </tr>
                                <tr>
                                <th scope="row">10</th>
                                <td>Quantity Survey</td>
                                <td><Link to='/admin/downloads' className="btn btn-success">Download</Link></td>
                                
                                </tr>
            
                            </tbody>
                            </table>
                            </div>
                            <Pagination />
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Downloads
