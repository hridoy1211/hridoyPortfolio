import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className = 'container'>
            <div className="row">
            
                <div className="col-md-8">
                <div className='text-center my-4'>
                <h3>Get in Touch</h3>
            </div>
            
                <form className="row g-3">
                    
                        <label htmlFor="inputEmail4" className="form-label">NAME</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Enter your Name"/>
                    
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">YOUR MESSAGE</label>
                        <textarea type="text" className="form-control text-area" id="inputAddress" placeholder="Write your message here"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">EMAIL</label>
                        <input type="email" className="form-control" id="inputCity" placeholder="Enter Email"/>
                    </div>
                    
                    <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn submit-btn" type="button">Send Message</button>
                    <button className="btn submit-btn" type="reset" value='Reset'>Reset</button>
                    </div>
                </form>


                </div>
                <div className="col-md-4 my-5 list-design px-5">
                    <div>
                        <h4>FOLLOW US</h4>
                        <div className='icon'>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h4>PHONE</h4>
                        <i className="fas fa-phone-alt"></i> &nbsp;&nbsp; <span>+8801797942433</span>
                    </div>

                    <hr />

                    <div>
                        <h4>ADDRESS</h4>
                        <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp; <span>36/A MPC Bhaban, Doyagonj, Dhaka-1100</span>
                    </div>

                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Contact;