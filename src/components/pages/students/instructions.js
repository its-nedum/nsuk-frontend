import React from 'react'
import Navbar from '../../header/navbar'
import '../../styles/instructions.css'
import {Link} from 'react-router-dom'

const Instructions = () => {
    return (
        <div>
            <Navbar />
            <div className="instruct">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card instruction_card">
                                <div className="card-body">
                                    <h3 className="card-title">INSTRUCTIONS</h3>
                                    <div className="h3">Post-UTME Screening Eligibility</div>
                                    <span className = "text-light">To be eligible for the Post-UTME Screening Exercise, the candidate (UTME and DIRECT ENTRY) must have:</span>
                                    <ul className="text-light">
                                        <li className="m-1">
                                            Chosen Nasarawa State University, Keffi as their first choice of institution or changed his/her most 
                                            preferred institution to NSUK in the 2020/2021 Unified Tertiary Matriculation Examination (UTME).
                                        </li>
                                        <li className="m-1">
                                            Scored 160 and above in the 2020/2021 Unified Tertiary Matriculation Examination (UTME).
                                        </li>
                                    </ul>
                                    <div className="h3">Application Process</div>
                                    <span className = "text-light">Eligible candidates are required to:</span>
                                    <ul className="text-light">
                                        <li className="m-1">
                                            Visit the Nasarawa State University Post-UTME Screening Portal at www.######.com and 
                                            create his/her profile with the right information (First Name, Last Name, UTME Registration Number, Email Address, 
                                            Phone Number and Password).<br />
                                            <span className="h6 text-danger">Note: Your UTME Registration Number, Email Address, 
                                                    Phone Number and Password must be valid before starting the application process.</span>
                                        </li>
                                        <li className="m-1">
                                            Provide information about their O’Level results:
                                            <ol>
                                                <li>Number of O'Level examination sitting(s).</li> 
                                                <li>Results Checker Scratch Card details for the applicable O’Level examination body.</li>
                                                <li>Five (5) O’ level credits in subjects relevant to his/her desired course of study (at not more than two sittings). Credit in English Language and Mathematics are compulsory.</li> 
                                                <li>On selection of O’ level subject listed in a drop-down, fill in the correct grade.</li>
                                                <li>First Degree, HND, minimum of lower credit in ND, NSUK Diploma, merit in NCE, Eight (8) points in IJMB/JUPEB (Direct Entry candidates).</li>
                                            </ol>
                                            <span className="h6 text-danger">Note: Any incorrect information shall result in outright and automatic disqualification of the candidate.</span>
                                        </li>
                                        
                                        <li className="m-1">
                                            Provide information about their Degree Certificate (Direct Entry candidates):
                                            <ol>
                                                <li>First Degree.</li>
                                                <li>HND</li>
                                                <li>Minimum of lower credit in National Diploma.</li>
                                                <li>Minimum of lower credit in NSUK Diploma.</li>
                                                <li>Minimum of merit in NCE.</li>
                                                <li>Minimum of Eight (8) points in IJMB/JUPEB aggregate.</li>
                                            </ol>
                                            <span className="h6 text-danger">Note: Any incorrect information shall result in outright and automatic disqualification of the candidate.</span>
                                        </li>
                                        <li>Make a Non-Refundable payment of ₦2,000.00 (Two Thousand Naira 0nly) excluding Bank charges.</li> 
                                        <ul>
                                            <li>Payment information will be provide during completion of the application.</li>
                                            <li>Your application profile will not be created until the application processing fee has been received.</li>
                                            <li>There are no exemptions from the application processing fee.</li>
                                        </ul>
                                        <span className="h6 text-danger">Note: All candidates have a unique Remita Retrieval Reference (RRR) number, only make payment with the one provided to you during the application process.</span>
                                        <li>Application for the Post-UTME Screening Exercise begins on the xxth xxxxx, 2020 and ends on xxth xxxxx, 2020.</li> 
                                        <span className="h6 text-danger">Note: Failure to complete/submit the Post-UTME application before 
                                        the application deadline might lead to disqualification.</span>
                                    </ul>
                                    <hr />
                                    <p className="h5">Terms and Condition.</p>
                                    <ul className = "text-light">
                                        <li>I agree with the Terms and Condition provided by Nasarawa State University, Keffi Authorities.</li>
                                        <li>I coincide with the Authorities of Nasarawa State University, Keffi on their decisions taken 
                                        on any information I provided in the screening process.</li>
                                        <li>Payment of ₦2,000.00 (and Bank charges) will be made by me to the Remita Retrieval Reference number (RRR) provided to 
                                        me during my application process on the Nasarawa State University, Keffi Post-UTME Screening Exercise portal - www.#####.com</li>
                                    </ul>
                                    <div className="text-center pb-5">
                                        <Link to="/putme/register" className="btn btn-outline-success px-5">Start Application</Link>
                                    </div>
        
        
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Instructions
