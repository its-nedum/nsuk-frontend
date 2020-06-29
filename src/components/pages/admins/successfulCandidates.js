import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from '../../header/adminNavbar'
import Pagination from './pagination'
import '../../adminStyles/successfulCandidates.css'
import DepartmentalSummary from './departmentalSummary'
import SearchCandidate from './searchCandidate'
import SearchResult from './searchResult'

const SuccessfulCandidates = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="success_banner">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-sm-12 col-md-9">
                        <div className="success_candidates">
                        <h3 className="text-warning">List Of All Successful Candidates</h3>
                            <p>This is a list of all successful candidates, based on their academic performance and candidates with admission from JAMB. 
                                You can search for any candidate using their JAMB registration number.</p>
                                <p>You can also view departmental summary of all successful candidates.</p>
                            <h4>Total Successful Candidates: 5,000</h4>
                            <div className="">
                            <table className="table table-striped table-bordered table-info">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">JAMB No.</th>
                                <th scope="col">JAMB Score</th>
                                <th scope="col">Aggregate</th>
                                <th scope="col">Department</th>
                                <th scope="col">Screening Status</th>
                                <th scope="col">Admission Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Hassan Olawale Okafor</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Economics</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
                                
                                <tr>
                                <th scope="row">2</th>
                                <td>James Allahnana Godiya</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Mathematics and Statistics</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Halima Musa Agwayi</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Microbiology</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Hassan Olawale Okafor</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Biochemistry</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>James Allahnana Godiya</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Computer Science</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
                                <tr>
                                <th scope="row">6</th>
                                <td>Hassan Olawale Okafor</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Economics</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
                                <tr>
                                <th scope="row">7</th>
                                <td>James Allahnana Godiya</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Biochemistry</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
                                <tr>
                                <th scope="row">8</th>
                                <td>Halima Musa Agwayi</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Anatomy</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
                                <tr>
                                <th scope="row">9</th>
                                <td>Hassan Olawale Okafor</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>English Language</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
                                <tr>
                                <th scope="row">10</th>
                                <td>James Allahnana Godiya</td>
                                <td><Link to='/candidate/234678018'>234678018</Link></td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Biology Education</td>
                                <td>Successful</td>
                                <td>Successful</td>
                                </tr>
            
                            </tbody>
                            </table>
                            </div>

                            <Pagination />

                            <hr className="hr"/>
                            <h3 className="text-warning">Search Candidate</h3>
                            <div className="row">   
                                <SearchCandidate />
                            </div>
                            <h4>search result:</h4>
                            <div className="row">
                                <SearchResult />
                            </div>

                            <hr className="hr"/>
                                <DepartmentalSummary />
                            <hr className="hr"/>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}

export default SuccessfulCandidates
