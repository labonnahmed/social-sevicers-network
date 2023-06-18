import React from 'react';
import './Admin.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../../images/logo.png';
import cloud from '../../images/cloud-upload-outline 1.png';

const Admin = () => {
    return (
        <div className='md:grid grid-cols-5 gap-4 m-10'>
            <nav className='col-span-1'>
                <Link to="/">
                    <img src={logo} className="h-12 mr-4" alt="volunteer network Logo" />
                </Link>
                <div className='max-sm:flex justify-evenly max-sm:m-4 mt-6'>
                    <NavLink to='/admin' className='flex md:mb-3'>
                        <img className='h-5 mx-1 mt-1' src={cloud} alt="" />
                        Volunteer register list
                    </NavLink>
                    <NavLink to='/admin/addEvent' className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-0.5 mx-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add event
                    </NavLink>
                </div>
            </nav>
            <div className='col-span-4'>
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;