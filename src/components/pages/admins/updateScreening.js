import React from 'react'

const UpdateScreening = () => {
    return (
        <div className="col">
        <h3>Update Candidate's Screening Status</h3>
        <hr className="hr"/>
            <form className="update_form">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <input type="text" className="form-control" placeholder="JAMB Registration Number" value="326325074122" readOnly/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <select className="form-control">
                            <option>Select screening status</option>
                            <option>Successful</option>
                            <option>Failed</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <input type="submit" className="btn btn-primary" value="Submit" />   
                    </div> 
                </div>  
            </form>
            <hr className="hr"/>
        </div>
    )
}

export default UpdateScreening
