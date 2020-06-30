import React from 'react'
import { Link } from 'react-router-dom'
import '../../adminStyles/search.css'

const SearchResult = () => {
    return (
        <div className="col">
            <div className="result_table">
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
                    <td>Ciroma Olakunle Chukwuemka</td>
                    <td><Link to='/candidate/234678018'>6453427810</Link></td>
                    <td>290</td>
                    <td>79.09</td>
                    <td>Pending</td>
                    </tr> 
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchResult
