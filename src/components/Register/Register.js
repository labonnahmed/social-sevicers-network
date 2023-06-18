import React from 'react';
import logo from '../../images/logo.png';
import { useNavigate, useParams } from 'react-router-dom';

const Register = () => {
    const {event} = useParams();
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || null;
    
    const navigate = useNavigate();

    const handleRegister =(e) => {

        const volunteerInfo = {
            email: e.target[0].value,
            fullName: e.target[1].value,
            date: e.target[2].value,
            description: e.target[3].value,
            task: e.target[4].value
        }

        e.preventDefault();

        fetch('http://localhost:8000/volunteerRegister', {
            method: 'POST',
            body: JSON.stringify(volunteerInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))

        navigate('/events')
    };

    return (
        <div className='w-full h-full bg-slate-200'>
            <img className='m-auto py-7 h-32' src={logo} alt="" />
            <div className='border-2 m-auto p-4 rounded-md border-gray-300 h-auto md:w-5/12 max-md:w-8/12 max-sm:w-5/6 shadow-md bg-slate-100'>
                <h3 className='text-xl font-semibold my-3'>Register as a Volunteer</h3>
                <form onSubmit={handleRegister}>
                    <div className="relative z-0 mb-6 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer w-full" defaultValue={loggedInUser.email} required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username or Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="fullName" id="fullName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={loggedInUser.displayName} required />
                        <label htmlFor="fullName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="date" name="Date" id="Date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="Date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                        <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="task" id="task" className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={event} required />
                        <label htmlFor="task" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Task</label>
                    </div>
                    <button type="submit" className="md:w-full sm:w-auto my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register as a volunteer</button>
                </form>
            </div>
        </div>
    );
};

export default Register;