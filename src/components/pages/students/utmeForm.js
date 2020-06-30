import React from 'react'
import Navbar from '../../header/signedInStudent'
import SideNavbar from '../../header/studentSideNav'
import '../../styles/dashboard.css'
import '../../styles/utmeform.css'
import Style from '../../styles/Styles.module.css'

const UtmeForm = () => {
    return (
        <div>
        <Navbar />
            <div className={Style.dashboard_utmeForm}>
                <div className="row">
                    <div className={`col-sm-12 col-md-3 ${Style.dash_utmeForm}`}>
                        <SideNavbar />
                    </div>

                    <div className="col-sm-12 col-md-9">
                        <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-sm-12 col-md-8 application_form">
                            <form>
                                <h3 className="nsuk_title">NASARAWA STATE UNIVERSITY, KEFFI</h3>
                                <h5 className="nsuk_info">Post UTME Candidate's Information</h5>
                                <div className="row image_section">
                                    <div className="col-sm-8"></div>
                                    <div className="col-sm-4">
                                    <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="candidate_pic" />
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-sm-12 student_details">
                                    <h5 className="section_title">Personal Details</h5>
                                <table className="table table-bordered table-striped table-info table-sm">
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
                                <td>Status:</td>
                                <td>Awaiting Screening</td>
                                </tr>
                            </tbody>
                            </table>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 utme_details">
                                    <h5 className="section_title">UTME Details</h5>
                                    <table className="table table-bordered table-striped table-info table-sm">
                                        <thead>
                                        <tr>
                                        <th scope="col">Use of English</th>
                                        <th scope="col">Mathematics</th>
                                        <th scope="col">Chemistry</th>
                                        <th scope="col">Physics</th>
                                        </tr>
                                        </thead>
                                        <tbody>
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
                                    <table className="table table-bordered table-striped table-info table-sm">
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
                                    <td scope="row">1</td>
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
                                <div className="row">
                                    <div className="col-sm-12 general_info">
                                    <h5 className="section_title">General Information</h5>
                                    <p className="h5">Each admitted candidate shall bring the following credentials for the Faculty/Department Screening:</p>
                                    <ol>
                                        <li>Post-UTME Screening Acknowledgement Slip.</li>
                                        <li>Original Certificate(JAMB Result Slip, Direct Entry Registration Slip, JAMB Admission Letter).</li>
                                        <li>Birth Certificate or Affidavit or Declaration of Age, State.</li>
                                    </ol>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-6 print_btn">
                                        <input type="submit" className="btn btn-success" value="Print Acknowledgement Slip"/>
                                    </div>
                                    <div className="col-sm-3"></div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UtmeForm
