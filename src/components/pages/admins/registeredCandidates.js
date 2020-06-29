import React from 'react'
import AdminNavbar from '../../header/adminNavbar'
import '../../adminStyles/regCandidates.css'
// import Style from '../../adminStyles/adminStyle.module.css'

const RegisteredCandidates = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="reg_banner">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-sm-12 col-md-9">
                        <div className="registered_candidates">
                            <div className="row">
                                <h3>List Of All Registered Candidates</h3>
                                <p>This is a list of all registered candidates, you can search for a candidate using JAMB registration number.</p>
                            </div>
                            <div className="row">
                            <table className="table table-striped table-info">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">JAMB No.</th>
                                <th scope="col">JAMB Score</th>
                                <th scope="col">Aggregate</th>
                                <th scope="col">Admission Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                            <div className="row">
                            <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="!#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="!#">1</a></li>
                                <li className="page-item"><a className="page-link" href="!#">2</a></li>
                                <li className="page-item"><a className="page-link" href="!#">3</a></li>
                                <li className="page-item"><a className="page-link" href="!#">Next</a></li>
                            </ul>
                            </nav>
                            </div>
                            <hr className="hr"/>
                            <div className="row">
                                <h3>Search Candidate</h3>
                                <form action="">

                                </form>
                            </div>
                        </div>
                    </div>
                  <div className="col-md-1"></div>  
                </div>
            </div>
        </div>
    )
}

export default RegisteredCandidates
