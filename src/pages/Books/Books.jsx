import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    return (
        <div>
            <h3 className='text-3xl text-center p-7'>Books </h3>
            <Suspense fallback={<span> loading.... </span>}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4  mx-auto md:px-0  '>
              {
                data.map((singleBook) => 
                <Book singleBook={singleBook} key={singleBook.bookId}></Book> )
                }
              </div>
            </Suspense>
        </div>
    );
};

export default Books;