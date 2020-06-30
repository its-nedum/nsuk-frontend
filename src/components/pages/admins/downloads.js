import React from 'react'
import AdminNavbar from '../../header/adminNavbar'
import '../../adminStyles/downloads.css'

const Downloads = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="downloads_banner">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-sm-12 col-md-9">
                        <div className="download_candidates">

                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Downloads
