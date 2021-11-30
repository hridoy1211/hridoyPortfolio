import React from 'react';
import './Home.css'
import img from '../../img/hridoy.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container my-4'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12">
                    <img src={img} className='img-fluid img mt-4' alt="" />
                </div>
                <div className="col-md-6 col-12">
                    <div style={{textAlign: 'left'}}>
                        <p className='lineHeight'><small style={{letterSpacing: '3px', fontWeight:500}}>WELCOME TO MY WORLD</small></p>
                        <h1 style={{fontWeight:700, fontSize:'60px'}}><span style={{color:'#C65685'}}> Hridoy </span> Debnath</h1>
                        <h3 style={{fontWeight:600, fontSize:'40px'}}>Fornt-end Web Developer</h3>
                        <p className='second-title'>I always work towards achieving best result on each project I lay my hands on. Every great design begin with an even better story.</p>
                        <button className='btn btn-outline-danger'> <a className='button' href="https://drive.google.com/file/d/1iD2WBslSUoqNIH2NjR4J0kZCGUXpsGLQ/view?usp=sharing" download target=' '> Download Resume </a></button> &nbsp;
                        <Link to='/contact'><button className='btn btn-outline-danger button'>Say Hello</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Hello! My name is Hridoy and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! Here are a few technologies I’ve been working with recently: JavaScript (ES6+), React js, Node js, MongoDB, Firebase

export default Home;