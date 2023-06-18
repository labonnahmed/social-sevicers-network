import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='flex text-2xl justify-center items-center h-screen'>
            <h1>Comming soon.....</h1>
            <Link to='/' className='ml-4 underline visited:text-red-600'>Back to home</Link>
        </div>
        
    );
};

export default Blog;