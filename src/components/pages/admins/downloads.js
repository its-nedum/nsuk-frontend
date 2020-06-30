import React from 'react'
import AdminNavbar from '../../header/adminNavbar'
import DepartmentalSummary from './departmentalSummary'
import '../../adminStyles/downloads.css'

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
                            <DepartmentalSummary />
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Downloads
