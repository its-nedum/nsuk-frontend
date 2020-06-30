import React from 'react'
import AdminNavbar from '../../header/adminNavbar'
import UpdateAdmission from './updateAdmission'

const SingleCandidate = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="screening_banner">
               <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-sm-12 col-md-8">
                        <div className="screen_me">
                        
                        <h3>Candidate's Profile</h3>
                        <div className="profile_holder">
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                            <table className="table table-bordered table-striped table-warning table-sm">
                            <tbody>
                                <tr>
                                <td>Jamb Registration Number:</td>
                                <td>326325074122</td>
                                </tr>
                                <tr>
                                <td>Full Name:</td>
                                <td>Emeka Kayode Yakubu</td>
                                </tr>
                                <tr>
                                <td>Course:</td>
                                <td>Computer Science</td>
                                </tr>
                                <tr>
                                <td>Gender:</td>
                                <td>Male</td>
                                </tr>
                                <tr>
                                <td>State:</td>
                                <td>Nasarawa</td>
                                </tr>
                                <tr>
                                <td>Mode of Entry:</td>
                                <td>UTME</td>
                                </tr>
                                <tr>
                                <td>UTME Score:</td>
                                <td>270</td>
                                </tr>
                                <tr>
                                <td>Post UTME Aggregate:</td>
                                <td>79.65</td>
                                </tr>
                                <tr>
                                <td>Screening Status:</td>
                                <td>Successful</td>
                                </tr>
                                <tr>
                                <td>Admission Status:</td>
                                <td>Successful</td>
                                </tr>
                            </tbody>
                            </table> 
                            </div>
                            <div className="col-sm-12 col-md-4">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="candidate_pic" /> 
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12 utme_details">
                            <h5 className="section_title">UTME Details</h5>
                            <table className="table table-bordered table-striped table-warning table-sm">
                            <tbody>
                                <tr>
                                <td>English</td>
                                <td>Mathematics</td>
                                <td>Chemistry</td>
                                <td>Physics</td>
                                </tr>
                                <tr>
                                <td>60</td>
                                <td>70</td>
                                <td>80</td>
                                <td>60</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12 olevel_details">
                                    <h5 className="section_title">O'level Details</h5>
                                    <table className="table table-bordered table-striped table-warning table-sm">
                                    <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Grade</th>
                                    <th scope="col">Exam Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>English</td>
                                    <td>B3</td>
                                    <td>WAEC</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Mathematics</td>
                                    <td>A1</td>
                                    <td>WAEC</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Chemistry</td>
                                    <td>C4</td>
                                    <td>WAEC</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">4</th>
                                    <td>Biology</td>
                                    <td>C5</td>
                                    <td>WAEC</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">5</th>
                                    <td>Physics</td>
                                    <td>B2</td>
                                    <td>WAEC</td>
                                    </tr>
                                </tbody>
                                    </table>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                            <UpdateAdmission />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div> 
            </div>
        </div>
    )
}

export default SingleCandidate
