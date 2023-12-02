import React from 'react';
import Reactdom from 'react-dom';
import NavbarCss from '../../cssfiles/navbar.css'

export default function Navbar() {
  return (
    <>
      <nav id='n' class='navbar navbar-expand-lg  py-4  bg-dark'>
        <div class='container-fluid ms-auto ' >
          <a class='navbar-brand text-white ms-5 ' href='/'>
            mail@growing.com
          </a>
          
          <div class='collapse navbar-collapse ' id='navbarNav'>
            <ul class='navbar-nav ms-auto'>
              <li class='nav-item'>
                <a class='nav-link active text-white me-2' aria-current='page' href='#' font-weight-bold>
                  Web Stories
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white me-2' href='#' font-weight-bold>
                  Blog
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white me-2' href='#'>
                  FAQ's
                </a>
              </li>
              <li class='nav-item'>
                {/* <a class='nav-link disabled text-white' aria-disabled='true'> */}
                <a class='nav-link text-white me-2'  href='#'>
                  About Us
                </a>
              </li>
              <li class='nav-item'>
                {/* <a class='nav-link disabled text-white' aria-disabled='true'> */}
                <a class='nav-link text-white me-2' href='/signup'>
                  Sign Up
                </a>
              </li>
              <li class='nav-item'>
                {/* <a class='nav-link disabled text-white' aria-disabled='true'> */}
                <a class='nav-link text-white me-2' href='/login'>
                 Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
