import React from 'react';
import { Link } from 'react-router-dom'

const DonationSuccess = () => {
    return (
        <div className='text-3xl h-screen w-screen text-center'>
            <h1 className='relative top-1/3 font-serif'>Thank You for Donate🥰</h1>
            <Link to='/' className='ml-4 underline visited:text-red-600'>Back to home</Link>
        </div>
    );
};

export default DonationSuccess;