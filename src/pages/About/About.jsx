import React from 'react';
import image from '../../../src/assets/books.jpg'

const About = () => {
    return (
        <div>
             <h3 className='text-center text-3xl font-bold underline' > there  is about area </h3>
             <img className='w-[75%] ml-[14%] mt-8 rounded' src={image} alt="" />
        </div>
    );
};

export default About;