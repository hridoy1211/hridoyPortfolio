import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className = 'container'>
            <div className="row">
            
                <div className="col-md-8">
                <div className='text-center my-4'>
                <h3>Get in Touch</h3>
                <p>Feel free to contact me in any of my socail media or you can direct message me on this websites.</p>
            </div>
            
                <form action='#' className="row g-3">
                    
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
                    <button className="btn submit-btn" type="submit" value='Send Message' >Send Message</button>
                    <button className="btn submit-btn" type="reset" value='Reset'>Reset</button>
                    </div>
                </form>


                </div>
                <div className="col-md-4 my-5 list-design px-5">
                    <div>
                        <h4>FOLLOW ME</h4>
                        <div className='icon'>
                            <a href="https://www.linkedin.com/in/hridoy-debnath-798598216/" target=''><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/hridoy1211" target=''><i class="fab fa-github-square"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100032280134929" target=''><i className="fab fa-facebook-square"></i></a>
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
    //     <section class="contact" id="contact">
    //     <div class="max-width">
    //         <h2 class="title">Contact me</h2>
    //         <div class="contact-content">
    //             <div class="column left">
    //                 <div class="text">Get in Touch</div>
    //                 <p>Feel free to contact me in any of my socail media or you can direct message me on this websites.
    //                 </p>
    //                 <div class="icons">
    //                     <div class="row">
    //                         <i class="fas fa-user"></i>
    //                         <div class="info">
    //                             <div class="head">Name</div>
    //                             <div class="sub-title">Nahidul Haque</div>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <i class="fas fa-map-marker-alt"></i>
    //                         <div class="info">
    //                             <div class="head">Address</div>
    //                             <div class="sub-title">1086/3 A East-Jurain.Dhaka</div>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <i class="fas fa-envelope"></i>
    //                         <div class="info">
    //                             <div class="head">Email</div>
    //                             <div class="sub-title">nahidalhaque849@gmail.com</div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="column right">
    //                 <div class="text">Message me</div>
    //                 <form action="#">
    //                     <div class="fields">
    //                         <div class="field name">
    //                             <input type="text" placeholder="Name" required/>
    //                         </div>
    //                         <div class="field email">
    //                             <input type="email" placeholder="Email" required/>
    //                         </div>
    //                     </div>
    //                     <div class="field">
    //                         <input type="text" placeholder="Subject" required/>
    //                     </div>
    //                     <div class="field textarea">
    //                         <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
    //                     </div>
    //                     <div class="button-area">
    //                         <button type="submit">Send message</button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    );
};

export default Contact;