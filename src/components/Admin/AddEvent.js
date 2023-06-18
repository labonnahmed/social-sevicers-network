import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const navigate = useNavigate();

    const handleAddEvent = (e) => {
        const newEvent = {
            title: e.target[0].value,
            image: e.target[3].value.replace('C:\\fakepath\\', ''),
            // "C:\fakepath\babySit.png"
            bgColor: e.target[2].value
        }
        console.log(newEvent)
        e.preventDefault();

        fetch('http://localhost:8000/addEvent', {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

        navigate('/')
    };

    return (
        <div >
            <h4 className='text-2xl font-semibold p-2'>Add event</h4>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg p-4'>
                <form className="w-full" onSubmit={handleAddEvent}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                                Event Title
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" placeholder="Enter title" required />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="date">
                                Event Date
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date" type="date" />
                        </div>
                        <div className="w-full h-fit md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                                Background
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="description" type="text" placeholder="Enter background" required />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Banner
                            </label>
                            <input className="appearance-none block w-full mb-5 text-sm text-gray-900 border border-gray-200 rounded-lg cursor-pointer bg-gray-200 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="grid-zip" type="file" placeholder="90210" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <button type='submit' className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;