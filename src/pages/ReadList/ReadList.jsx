import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utillity/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
  const [redList, setReadList] = useState([]);
  const [sort , setSort] = useState("")



  const data = useLoaderData();
  useEffect(() => {
    const storeBookData = getStoredBook();
    const ConvertedStoredBooks = storeBookData.map(id => parseInt(id))
    const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
    setReadList(myReadList)
  }, [])
  
  const handleSort = (type)  => {
    setSort(type);
if(type === "pages") {
  const sortedByPage = [...redList].sort((a, b ) => a.totalPages - b.totalPages)
  setReadList(sortedByPage);
  console.log(sortedByPage)
}
 if(type === "ratings") {
  const sortedByRating = [...redList].sort((a, b) => a.rating - b.rating)
  setReadList(sortedByRating)
 }

}
  return (
    <div>

      <details className="dropdown">
        <summary className="btn m-1">Sort By : {sort ? sort: ""} </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a onClick={() => handleSort("pages")}>Pages</a></li>
          <li><a onClick={() => handleSort("rating")}>Rating</a></li>
        </ul>
      </details>



      <Tabs>
        <TabList>
          <Tab>Read Books List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {redList.length} </h2>
          {
            redList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>


    </div>
  );
};

export default ReadList;