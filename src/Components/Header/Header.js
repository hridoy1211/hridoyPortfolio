import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                <Link to='/home' class="navbar-brand">Hridoy</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link to='/home' class="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link  class="nav-link" to='/about'>About</Link>
                    </li>
                    <li class="nav-item">
                      <Link  class="nav-link" to='/project'>My Project</Link>
                    </li>
                    <li class="nav-item">
                      <Link  class="nav-link" to='/contact'>Contact</Link>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </nav>
        </div>
    );
};

export default Header;