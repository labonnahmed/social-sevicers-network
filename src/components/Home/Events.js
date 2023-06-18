import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Events = ({ searchTheme, setLoading, setError }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/getEvents?searchTheme=' + searchTheme)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
                data.length === 0 ? setError(true) : setError(false);
            })
    }, [searchTheme]);


    return (
        <div className="grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-5 m-12 rounded-3xl">
            {
                events.map(service =>
                    <Link to={`/register/${service.title}`} key={service._id}>
                        <div className='max-w-full'>
                            <img className='w-full h-64' src={require(`../../images/${service.image}`)} alt="" />
                            <h3 style={{ backgroundColor: `#${service.bgColor}` }} className='relative bottom-6 text-center font-medium text-2xl text-white p-3 rounded-b-lg'>{service.title}</h3>
                        </div>
                    </Link>
                )

            }
        </div>
    );
};

export default Events;