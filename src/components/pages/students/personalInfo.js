import React from 'react'

const PersonalInfo = () => {
    return (
        <div className="container personal_info_banner">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-sm-12 col-md-8">
                    <form className="">
                    <p>Complete your student profile information.</p>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-user-circle"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="First Name" aria-label="firstname" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-user-circle"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="Last Name" aria-label="lastname" aria-describedby="basic-addon1" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-user-circle"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="Middle Name (optional)" aria-label="middlename" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-envelope"></span></span>
                                    </div>
                                <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-phone"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="Telephone Number" aria-label="telephone" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-female"></span></span>
                                    </div>
                                <select className="form-control">
                                    <option>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-6">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-building"></span></span>
                                    </div>
                                <select className="form-control">
                                    <option>State of Origin</option>
                                    <option>Abia</option>
                                <option>Adamawa</option>
                                <option>Akwa Ibom</option>
                                <option>Anambra</option>
                                <option>Bauchi</option>
                                <option>Bayelsa</option>
                                <option>Benue</option>
                                <option>Borno</option>
                                <option>Cross River</option>
                                <option>Delta</option>
                                <option>Ebonyi</option>
                                <option>Edo</option>
                                <option>Ekiti</option>
                                <option>Enugu</option>
                                <option>Gombe</option>
                                <option>Imo</option>
                                <option>Jigawa</option>
                                <option>Kaduna</option>
                                <option>Kano</option>
                                <option>Katsina</option>
                                <option>Kebbi</option>
                                <option>Kogi</option>
                                <option>Kwara</option>
                                <option>Lagos</option>
                                <option>Nasarawa</option>
                                <option>Niger</option>
                                <option>Ogun</option>
                                <option>Ondo</option>
                                <option>Osun</option>
                                <option>Oyo</option>
                                <option>Plateau</option>
                                <option>Rivers</option>
                                <option>Sokoto</option>
                                <option>Taraba </option>
                                <option>Yobe</option>
                                <option>Zamfara</option>
                                <option>Federal Capital Territory</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-building"></span></span>
                                    </div>
                                <input type="text" className="form-control" placeholder="L.G.A" aria-label="lga" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group mb-3">   
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><span className="fas fa-book"></span></span>
                                    </div>
                                <select className="form-control">
                                    <option>Select Course</option>
                                    <option value="">Computer Science</option>
                                    <option value="">Mass Communication</option>
                                    <option value="">Microbiology</option>
                                    <option value="">Biochemistry</option>
                                    <option value="">Economics</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupFileAddon01">Image</span>
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                    <label className="custom-file-label" for="inputGroupFile01">Upload passport</label>
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

export default PersonalInfo
