import React from 'react';
import './Home.css'
import img from '../../img/Capture(1).png'

const Home = () => {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12">
                    <img src={img} className='img-fluid img' alt="" />
                </div>
                <div className="col-md-6 col-12">
                    <div style={{textAlign: 'left'}}>
                        <p style={{ }}><small style={{letterSpacing: '3px', fontWeight:500}}>WELCOME TO MY WORLD</small></p>
                        <h1 style={{fontWeight:700, fontSize:'60px'}}>Hridoy Debnath</h1>
                        <h3 style={{fontWeight:600, fontSize:'40px'}}>Fornt-end Web Developer</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;