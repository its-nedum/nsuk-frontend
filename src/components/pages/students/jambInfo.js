import React from 'react'

const JambInfo = () => {
    return (
        <div className="container personal_info_banner">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-sm-12 col-md-8">
                    <form className="">
                    <p>Provide your JAMB UTME information.</p>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-registered"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="JAMB Registration Number" aria-label="jambno" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-check-square"></span></span>
                                    </div>
                                <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Mode of Entry</option>
                                    <option>UTME</option>
                                    <option>Direct Entry</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-dot-circle-o"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="UTME Score" aria-label="utmescore" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default JambInfo
