import React from 'react'
import Navbar from '../../header/navbar'
import '../../styles/contact.css'
import styles from '../../styles/Styles.module.css' //https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact_banner">
                <div className="">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                        <form className={`contact_form ${styles.App}`}>
                        <h3>Contact Us</h3>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" id="fullname" className="form-control" placeholder="John Doe" required=""/>
                                    
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" className="form-control" placeholder="john.doe@gmail.com" required=""/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows="8" placeholder="Hello..." required=""></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12">
                            <div className="submit_btn">
                                <input type="submit" className="form-control btn btn-primary" value='SEND' />
                            </div>
                        </div>
                        </div>
                    </form>
                    <div className="alternatively">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Alternatively:</h5>
                            <p className="get_address"><span className="fas fa-location-arrow"></span> Nasarawa State University, Keffi</p>
                            <p className="get_address"><span className="fas fa-phone"></span> (+234) xxx xxxx xxx (Week days 9am to 5pm)</p>
                            <p className="get_address"><span className="fas fa-envelope"></span> support@nsuk.com</p>
                            <div className="social_links">
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter"></span></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram"></span></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook"></span> </a>
                            </div>
                        </div>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                        
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
