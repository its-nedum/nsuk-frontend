import React from 'react'
import Pagination from './pagination'

const DepartmentalSummary = () => {
    return (
        <div>
        <h3 className="text-warning">Departmental Summary</h3>
            <div className="">   
            <table className="table table-striped table-bordered table-success">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Department</th>
                <th scope="col">No. of Applied</th>
                <th scope="col">No. of Screened</th>
                <th scope="col">No. of Successful</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Economics</td>
                <td>1500</td>
                <td>1250</td>
                <td>700</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Mathematics and Statistics</td>
                <td>500</td>
                <td>467</td>
                <td>210</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Microbiology</td>
                <td>1000</td>
                <td>900</td>
                <td>300</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Biochemistry</td>
                <td>750</td>
                <td>600</td>
                <td>250</td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>Computer Science</td>
                <td>1200</td>
                <td>850</td>
                <td>420</td>
                </tr>
            </tbody>
            </table> 
            </div>
            <Pagination />
        </div>
    )
}

export default DepartmentalSummary
