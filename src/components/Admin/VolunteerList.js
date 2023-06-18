import React, { useEffect, useState } from 'react';

const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/volunteersList')
            .then(res => res.json())
            .then(data => {
                setVolunteers(data)
            });
    }, [volunteers]);

    const handleRemoveTask = (id) => {
        fetch('http://localhost:8000/remove/volunteer?id=' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
            .then(res => res.json())
            .then(data => setVolunteers(data));
    };

    return (
        <div>
            <h4 className='text-2xl font-semibold p-2'>Volunteer register list <span className='text-lg text-gray-500'>({volunteers.length})</span></h4>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Registering date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Volunteer list
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteers.length > 0 && volunteers.map(V =>
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={V._id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {V.fullName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {V.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {V.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {V.task}
                                    </td>
                                    <td className="px-6 py-4">
                                        <svg onClick={() => handleRemoveTask()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ml-2 p-1 bg-red-500 text-white rounded-sm">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Volunteers;