import React from 'react'
import AdminNavbar from '../../header/adminNavbar'
import '../../adminStyles/adminDashboard.css'

const AdminDashboard = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="admin_banner">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-sm-12 col-md-8">
                        <div className="admin_notes">
                            <h3 className="text-success">Welcome admin@gmail.com</h3>
                            <p>Your're welcome to Nasarawa State University Keffi Admin dashboard for the 2020/2021 Post UTME screening exercise.</p>
                            <p>As an admin, you can perform the following tasks:</p>
                            <ol>
                                <li><span className="text-warning">Add Admin</span>: This option provides the "super admin" the privilege to register a new admin into the system</li>
                                <li><span className="text-warning">All Candidates</span>: You get a complete list of all the candidates registered on the system and you can also search for a candidates using their JAMB registration number.</li>
                                <li><span className="text-warning">Successful Candidates</span>: This is a comprehensive list of all the successfully admitted candidates into various department after physically screening their credentials and reviewing their academic performance.</li>
                                <li><span className="text-warning">Update Admission Status</span>: Although the system can automatically update a candidates admission status once they meet all the necessary academic requirements and cut-off marks, an admin can also update any student's admission status manually.</li>
                                <li><span className="text-warning">Screen Candidates</span>: This section allows an admin to update a candidates screening status on the day of the screening exercise once he/she is satisfied that such candidates meet the necessary requirements.</li>
                                <li><span className="text-warning">Downloads</span>: Here an admin can download successfully admitted candidates information.</li>
                                <li><span className="text-warning">Search Candidate</span>: An admin can search and view any candidate's application profile details.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
