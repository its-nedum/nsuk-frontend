import React from 'react'
import AdminNavbar from '../../header/adminNavbar'
import Pagination from '../admins/pagination'
import SearchCandidate from './searchCandidate'
import SearchResult from './searchResult'
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
                            <h3 className="text-warning">List Of All Registered Candidates</h3>
                            <p>This is a list of all registered candidates, you can search for a candidate using their JAMB registration number.</p>
                            <h4>Total Registered Candidates: 15,000</h4>
                            <div className="">
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
                                <td>Hassan Olawale Okafor</td>
                                <td>234678018</td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>James Allahnana Godiya</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Halima Musa Agwayi</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Hassan Olawale Okafor</td>
                                <td>234678018</td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>James Allahnana Godiya</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">6</th>
                                <td>Hassan Olawale Okafor</td>
                                <td>234678018</td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">7</th>
                                <td>James Allahnana Godiya</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">8</th>
                                <td>Halima Musa Agwayi</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">9</th>
                                <td>Hassan Olawale Okafor</td>
                                <td>234678018</td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">10</th>
                                <td>James Allahnana Godiya</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">11</th>
                                <td>Hassan Olawale Okafor</td>
                                <td>234678018</td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">12</th>
                                <td>James Allahnana Godiya</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">13</th>
                                <td>Halima Musa Agwayi</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">14</th>
                                <td>Hassan Olawale Okafor</td>
                                <td>234678018</td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">15</th>
                                <td>James Allahnana Godiya</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">16</th>
                                <td>Hassan Olawale Okafor</td>
                                <td>234678018</td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">17</th>
                                <td>James Allahnana Godiya</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">18</th>
                                <td>Halima Musa Agwayi</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">19</th>
                                <td>Hassan Olawale Okafor</td>
                                <td>234678018</td>
                                <td>270</td>
                                <td>76.08</td>
                                <td>Pending</td>
                                </tr>
                                <tr>
                                <th scope="row">20</th>
                                <td>James Allahnana Godiya</td>
                                <td>234678018</td>
                                <td>230</td>
                                <td>66.08</td>
                                <td>Pending</td>
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
                        </div>
                    </div>
                  <div className="col-md-1"></div>  
                </div>
            </div>
        </div>
    )
}

export default RegisteredCandidates
