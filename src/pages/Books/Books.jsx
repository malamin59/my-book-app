import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    const [allBooks, setAllBooks] = useState([]);

    // useEffect(()=> {
    //     fetch("bookData.json").then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     } )
    // },
    //  [])
    // const booksPromise
    //     = fetch('./bookData.json').then(res => res.json())

    return (
        <div>
            <h3 className='text-3xl text-center p-7'>hi am books </h3>
            <Suspense fallback={<span> loading.... </span>}>
              <div className='grid lg:grid-cols-3 gap-6 '>
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