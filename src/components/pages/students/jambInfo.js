import React from 'react'

const JambInfo = () => {
    return (
        <div className="container personal_info_banner">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-sm-12 col-md-8">
                    <form className="jamb_info">
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
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="section_header">Subject Combination</p>
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Score</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Use of English</option>
                                    </select>
                                </td>
                                <td><input type="text" className="form-control" placeholder="Subject Score" /></td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Subject</option>
                                    <option>Mathematics</option>
                                    <option>Biology</option>
                                    <option>Chemistry</option>
                                    <option>Physics</option>
                                    </select>
                                </td>
                                <td><input type="text" className="form-control" placeholder="Subject Score" /></td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Subject</option>
                                    <option>Mathematics</option>
                                    <option>Biology</option>
                                    <option>Chemistry</option>
                                    <option>Physics</option>
                                    </select>
                                </td>
                                <td><input type="text" className="form-control" placeholder="Subject Score" /></td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Subject</option>
                                    <option>Mathematics</option>
                                    <option>Biology</option>
                                    <option>Chemistry</option>
                                    <option>Physics</option>
                                    </select>
                                </td>
                                <td><input type="text" className="form-control" placeholder="Subject Score" /></td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <p className="section_header">Upload JAMB Result Slip</p>
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

export default JambInfo
