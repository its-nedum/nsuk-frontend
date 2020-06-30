import React from 'react'

const Olevel = () => {
    return (
        <div className="container personal_info_banner">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-sm-12 col-md-8">
                    <form className="jamb_info">
                    <p>Provide your O'level Result information.</p>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-check-square"></span></span>
                                    </div>
                                <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Number of Sitting</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                                </div>
                            </div>   
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <p className="section_header">O'level Result(s) Checker Informations</p>
                            <div className="scroll_table">
                            <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Exam Num</th>
                                <th scope="col">Exam Year</th>
                                <th scope="col">Exam Type</th>
                                <th scope="col">Pin Num</th>
                                <th scope="col">Serial Num</th>
                                <th scope="col">Exam Body</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><input type="text" className="form-control" placeholder="Exam Num" /></td>
                                <td><input type="text" className="form-control" placeholder="Exam Year" /></td>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Exam Type</option>
                                    <option>Internal</option>
                                    <option>External</option>
                                    </select>
                                </td>
                                <td><input type="text" className="form-control" placeholder="Pin Num" /></td>
                                <td><input type="text" className="form-control" placeholder="Serial Num" /></td>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Exam Body</option>
                                    <option>WAEC</option>
                                    <option>NECO</option>
                                    <option>NABTEB</option>
                                    <option>Others</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><input type="text" className="form-control" placeholder="Exam Num" /></td>
                                <td><input type="text" className="form-control" placeholder="Exam Year" /></td>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Exam Type</option>
                                    <option>Internal</option>
                                    <option>External</option>
                                    </select>
                                </td>
                                <td><input type="text" className="form-control" placeholder="Pin Num" /></td>
                                <td><input type="text" className="form-control" placeholder="Serial Num" /></td>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Exam Body</option>
                                    <option>WAEC</option>
                                    <option>NECO</option>
                                    <option>NABTEB</option>
                                    <option>Others</option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="section_header">O'level Subject Combination</p>
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Exam Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>English</option>
                                    </select>
                                </td>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Grade</option>
                                    <option>A1</option>
                                    <option>B2</option>
                                    <option>B3</option>
                                    <option>C4</option>
                                    <option>C5</option>
                                    <option>C6</option>
                                    <option>D7</option>
                                    <option>E8</option>
                                    <option>F9</option>
                                    </select>
                                </td>
                                <td>
                                <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Exam Body</option>
                                    <option>WAEC</option>
                                    <option>NECO</option>
                                    <option>NABTEB</option>
                                    <option>Others</option>
                                    </select>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Mathematics</option>
                                    </select>
                                </td>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Grade</option>
                                    <option>A1</option>
                                    <option>B2</option>
                                    <option>B3</option>
                                    <option>C4</option>
                                    <option>C5</option>
                                    <option>C6</option>
                                    <option>D7</option>
                                    <option>E8</option>
                                    <option>F9</option>
                                    </select>
                                </td>
                                <td>
                                <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Exam Body</option>
                                    <option>WAEC</option>
                                    <option>NECO</option>
                                    <option>NABTEB</option>
                                    <option>Others</option>
                                    </select>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Subject</option>
                                    <option>English</option>
                                    <option>Mathematics</option>
                                    <option>Biology</option>
                                    <option>Chemistry</option>
                                    <option>Physics</option>
                                    </select>
                                </td>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Grade</option>
                                    <option>A1</option>
                                    <option>B2</option>
                                    <option>B3</option>
                                    <option>C4</option>
                                    <option>C5</option>
                                    <option>C6</option>
                                    <option>D7</option>
                                    <option>E8</option>
                                    <option>F9</option>
                                    </select>
                                </td>
                                <td>
                                <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Exam Body</option>
                                    <option>WAEC</option>
                                    <option>NECO</option>
                                    <option>NABTEB</option>
                                    <option>Others</option>
                                    </select>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Subject</option>
                                    <option>English</option>
                                    <option>Mathematics</option>
                                    <option>Biology</option>
                                    <option>Chemistry</option>
                                    <option>Physics</option>
                                    </select>
                                </td>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Grade</option>
                                    <option>A1</option>
                                    <option>B2</option>
                                    <option>B3</option>
                                    <option>C4</option>
                                    <option>C5</option>
                                    <option>C6</option>
                                    <option>D7</option>
                                    <option>E8</option>
                                    <option>F9</option>
                                    </select>
                                </td>
                                <td>
                                <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Exam Body</option>
                                    <option>WAEC</option>
                                    <option>NECO</option>
                                    <option>NABTEB</option>
                                    <option>Others</option>
                                    </select>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Subject</option>
                                    <option>English</option>
                                    <option>Mathematics</option>
                                    <option>Biology</option>
                                    <option>Chemistry</option>
                                    <option>Physics</option>
                                    </select>
                                </td>
                                <td>
                                    <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Grade</option>
                                    <option>A1</option>
                                    <option>B2</option>
                                    <option>B3</option>
                                    <option>C4</option>
                                    <option>C5</option>
                                    <option>C6</option>
                                    <option>D7</option>
                                    <option>E8</option>
                                    <option>F9</option>
                                    </select>
                                </td>
                                <td>
                                <select  className="form-control" aria-describedby="basic-addon1">
                                    <option>Select Exam Body</option>
                                    <option>WAEC</option>
                                    <option>NECO</option>
                                    <option>NABTEB</option>
                                    <option>Others</option>
                                    </select>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <p className="section_header">Upload O'level Result(s)</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupFileAddon01">1st</span>
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="form-control"/>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupFileAddon01">2nd</span>
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="form-control"/>
                                </div>
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

export default Olevel
