import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import image from '../../images/extraVolunteer.png';

const Events = () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || null;
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/registeringEvent?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                data.length === 0 ? setError(true) : setError(false);
            })
    }, [events]);

    const handleRemoveEvent = (id) => {
        fetch('http://localhost:8000/remove/volunteer?id=' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                data.length === 0 ? setError(true) : setError(false);
            })
    }

    return (
        <div className='w-full h-wull'>
            <nav className="p-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/">
                        <img src={logo} className="h-12 mr-3" alt="volunteer network Logo" />
                    </Link>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="menu">
                            <li>
                                <Link to="/" className="menuList" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/donation" className="menuList ">Donation</Link>
                            </li>
                            <li>
                                <Link to="/blog" className="menuList">Blog</Link>
                            </li>
                            <li>
                                <Link to="/login" className="menuList text-blue-400 underline">{loggedInUser.displayName}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5 mx-10'>
                {
                    events.length > 0 && events.map(event =>
                        <div className='flex p-4 bg-slate-100 rounded-lg' key={event._id}>
                            <img className='h-30 w-40' src={image} alt="" />
                            <div className='px-7'>
                                <h4 className='font-semibold text-2xl'>{event.task}</h4>
                                <p className='text-gray-700'>{event.date}</p>
                            </div>
                            <button className='bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 ml-auto mt-auto rounded text-md font-medium'
                                onClick={() => handleRemoveEvent(event._id)}>
                                Cancel
                            </button>
                        </div>
                    )
                }
            </div>
            {
                error &&
                <div className='flex text-lg font-bold text-gray-800 justify-center mt-16'>
                    No Event Exist...
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                    </svg>
                    <br />
                    Register a New...
                </div>
            }
        </div>
    );
};

export default Events;