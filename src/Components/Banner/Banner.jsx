import React from 'react';
import  bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero px-4 bg-base-200 min-h-screen" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src={bookImage}
            className="max-w-sm  w-8/12 rounded-lg shadow-2xl" />
          <div>
            <h1 className="lg:text-5xl text-2xl font-bold">Books to freshen up your bookshelf</h1>
       
            <button className=" mt-3 btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
       
    );
};

export default Banner;