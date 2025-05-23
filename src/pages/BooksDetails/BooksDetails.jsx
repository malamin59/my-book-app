import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utillity/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)



const BooksDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data?.find(book => book.bookId === bookId);
    console.log(singleBook)
    const { bookName, rating, yearOfPublishing, author, image, publisher, review, category, tags, totalPages } = singleBook || {}

    const handleMarkAsRead = id => {
        //store with id 
        toast("Wow so easy!");
        // where to use 
        // array of collection 
        // if book already exist the show collection or array 

        MySwal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
          });
        


        addToStoredDB(id)

    }

    return (
        <div className='w-4/5 mx-auto lg:flex justify-between gap-20 mt-4 '>
            <img className='lg:w-6/12 py-14 px-14 h-auto  rounded-sm shadow-2xl bg-gray-100' src={image} alt="" />
            <div>
                <h5 className='text-3xl font-bold lg:mt-0 mt-10'>{bookName}</h5>
                <h6 className='text-xl text-gray-500'> By : {author}</h6>
                <ToastContainer />
                <h3 className='my-2'>{category}</h3>
                <p> <small className='font-bold'>Review :</small> {review}</p>
                <div className='flex gap-6 mt-2' >
                    <h4 className='font-bold mt-2'>Tag  </h4>
                    {
                        tags.map(tag => <p className='btn'>{tag}</p>)
                    }
                </div>
                <h5 className='flex items-center justify-between mt-2'><small className='text-gray-500 text-xl'>Number of page : </small>{totalPages}</h5>
                <h3 className='flex items-center justify-between mt-2'> <small className='text-xl'>Publisher:</small>{publisher}</h3>
                <h4 className='flex items-center justify-between mt-2 font'>
                    <small className='text-xl'>Year of Publishing:</small> {yearOfPublishing}</h4>
                <p className='flex items-center justify-between mt-2'>Rating: {rating}</p>
                <button onClick={() => handleMarkAsRead(id)} className="btn font-bold m-2 btn-accent">Mark as Read</button>
                <button className="btn font-bold m-2 btn-info">Add To WishList</button>
            </div>
        </div>
    );
};

export default BooksDetails;