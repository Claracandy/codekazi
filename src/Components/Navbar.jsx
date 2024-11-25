import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <a href='/' className='navbar-link'>About</a>
                </li>
                <li className='navbar-item'>
                    <a href='/' className='navbar-link'>Blog</a>
                </li>
                <li className='navbar-item'>
                    <a href='/' className='navbar-link'>Portfolio</a>
                </li>
                <li className='navbar-item'>
                    <a href='/' className='navbar-link'>Contact</a>
                </li>
                <li className='navbar-item'>
                    <a href='/' className='navbar-link'>More About Us</a>
                </li>
               
            </ul>
        </nav>
    );
}

export default Navbar;