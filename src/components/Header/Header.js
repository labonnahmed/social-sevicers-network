import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {

    return (
        <nav className="bg-white border-gray-200 p-4">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <img src={logo} className="h-12 mr-3" alt="volunteer network Logo" />
                </Link>
                <div className="flex md:order-2 max-sm:mt-4">
                    <Link to='/login'>
                        <button type="button" className="navButton bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    </Link>
                    <Link to='/admin'>
                        <button type="button" className="navButton bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Admin</button>
                    </Link>
                </div>
                <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="menu">
                        <li>
                            <Link to="/" className="menuList" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/events" className="menuList">Events</Link>
                        </li>
                        <li>
                            <Link to="/donation" className="menuList ">Donation</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="menuList">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;