import React from 'react'

const SearchResult = () => {
    return (
        <div className="col">
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
            <td>6453427810</td>
            <td>290</td>
            <td>79.09</td>
            <td>Pending</td>
            </tr> 
        </tbody>
        </table>
        </div>
    )
}

export default SearchResult
