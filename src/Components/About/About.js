import React from 'react';
import img2 from '../../img/hridoy2.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container py-2'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <h3 style={{textAlign:'left', color: 'rgb(107, 107, 107)'}}>About Me</h3>
                    <p className='paragraph'>Hello! My name is Hridoy and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development. I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma,PhotoShop; with prototype tools like Framer and Protopie. Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
                </div>
                <div className="col-md-6">
                    <img src={img2} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;