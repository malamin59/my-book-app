
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
  console.log(singleBook)
  const { bookName, category, rating, image, publisher,  tags , yearOfPublishing} = singleBook

  return (
    <div className="card bg-base-100 shadow-sm border p-4">
      <figure className='p-4 bg-gray-100 w-2/3 mx-auto '>
        <img className='h-[166px] rounded '
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex  justify-between mr-19">
        {
tags.map(tag=> <button className="text-green-500  ">{tag}</button>)
        }

        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p>Book By {publisher}</p>
        <div className="border-t-1 border-dashed">

        </div>
        <div className="card-actions flex justify-between">
          <div className="mr-4 text-xl">{category}</div>
          <div className="flex items-center gap-3 font-bold text-xl">{rating} {<FaStarHalfAlt size={18} />} </div>
        </div>
      </div>
    </div>
  );
};

export default Book;