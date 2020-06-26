import React from 'react'

const AlevelInfo = () => {
    return (
        <div className="container personal_info_banner">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-sm-12 col-md-8">
                    <form className="jamb_info">
                    <p>Provide your First Degree information (Direct Entry Only).</p>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-check-square"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="School Name" aria-label="school" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-check-square"></span></span>
                                    </div>
                                <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Degree Type</option>
                                    <option>BSc</option>
                                    <option>HND</option>
                                    <option>OND</option>
                                    <option>NCE</option>
                                    <option>Diploma</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-6">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-check-square"></span></span>
                                    </div>
                                <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select CGPA</option>
                                    <option>First Class</option>
                                    <option>Second Class Upper</option>
                                    <option>Second Class Lower</option>
                                    <option>Distinction</option>
                                    <option>Upper Credit</option>
                                    <option>Lower Credit</option>
                                    <option>Merit</option>
                                    <option>Third Class</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            </div>
                        </div>
            
                        <div className="row">
                            <div className="col-sm-12">
                            <p className="section_header">Upload A'level Result</p>
                            </div>
                            <div className="custom-file col-sm-6">
                                <input type="file" className="form-control"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default AlevelInfo
