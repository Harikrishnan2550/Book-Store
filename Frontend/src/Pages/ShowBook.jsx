// import React from 'react'
// import { IoArrowBackCircleOutline } from "react-icons/io5";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useState,useEffect } from 'react';
// import { useParams } from 'react-router-dom';
 
// function ShowBook() {

//   // const [books, setBooks] = useState([]);
//   // const [loading, setLoading] = useState(false);

//   const [books,SetBooks]=useState([]);
//   const[loading,setLoading]=useState(false);
//   const { id } = useParams();

  

//   useEffect(() => {
//     setLoading(true);
//     axios.get(`http://localhost:5000/book/${id}/`)
//       .then((res) => {
//         SetBooks(res.data);
//         setLoading(false);
//       })
//       .catch((error) => {
        
//         console.log(error)
//         setLoading(false);
//       });
//   }, [id]);
//   return (
//     <div>
//     <div className='ml-14 mt-10'>
//     <Link to={'/'} className='mt-8 ml-16'><IoArrowBackCircleOutline className='text-3xl'/></Link>
//  </div>
//  <div className="flex flex-col border-2  border-red-400 rounded-xl w-fit p-4 ml-32 mt-10">
//  <div className="my-4">
//    <span className="text-x1 mr-4 text-gray-500">Id</span>
//    <span>{books._id}</span>
//  </div>
//  <div className="my-4">
//    <span className="text-x1 mr-4 text-gray-500">Title</span>
//    <span>{books.title}</span>
//  </div>
//  <div className="my-4">
//    <span className="text-x1 mr-4 text-gray-500">Author</span>
//    <span>{books.author}</span>
//  </div>
//  <div className="my-4">
//    <span className="text-x1 mr-4 text-gray-500">Publish Year</span>
//    <span>{books.PublishYear}</span>
//  </div>
//  <div className="my-4">
//    <span className="text-m mr-4 text-gray-500">Create Time</span>
//    <span>{new Date(books.createdAt).toString()}</span>
//  </div>
//  <div className="my-4">
//    <span className="text-x1 mr-4 text-gray-500">Last Update Time</span>
//    <span>{new Date(books.updatedAt).toString()}</span>
//  </div>
// </div>

//     </div>
//   )
// }

// export default ShowBook



import React, { useState, useEffect } from 'react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ShowBook() {  
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/book/${id}/`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <div className='ml-14 mt-10'>
        <Link to='/' className='mt-8 ml-16'>
          <IoArrowBackCircleOutline className='text-3xl' />
        </Link>
      </div>
      <div className="flex flex-col border-2 border-red-400 rounded-xl w-fit p-4 ml-32 mt-10">
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">ID:</span>
          <span>{book._id}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Title:</span>
          <span>{book.title}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Author:</span>
          <span>{book.author}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Publish Year:</span>
          <span>{book.PublishYear}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Create Time:</span>
          <span>{new Date(book.createdAt).toLocaleString()}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Last Update Time:</span>
          <span>{new Date(book.updatedAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default ShowBook;
