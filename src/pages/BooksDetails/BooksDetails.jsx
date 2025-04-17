import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BooksDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
       const data = useLoaderData();
       const singleBook = data?.find(book=> book.bookId === bookId);
       console.log(singleBook)
        const {bookName, image } = singleBook
    return (
        <div className='w-2/3 mx-auto'>
              <img className='w-48'  src={image} alt="" />
              <h5>{bookName}</h5>
              <button  className="btn m-2 btn-accent">Read</button>
              <button  className="btn m-2 btn-info">WishList</button>
        </div>
    );
};

export default BooksDetails;