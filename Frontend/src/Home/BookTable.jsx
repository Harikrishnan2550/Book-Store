import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

function BookTable({books}) {
  return (
    <div>
    <table className=' w-full border-separate border-spacing-5 '>
    <thead className=' '>
    <tr className=''>
    <th className='border border-gray-700 rounded-md'>No.</th>
    <th className='border border-gray-700 rounded-md'>Title</th>
    <th className='border border-gray-700 rounded-md'>Author</th>
    <th className='border border-gray-700 rounded-md'>Publish Year</th>
    <th className='border border-gray-700 rounded-md'>Operation</th>
    </tr>
    </thead>
    <tbody>
    {books.map((book,index)=>(
       <tr key={book._id} className='h-8'>
       <td className='border border-gray-700 rounded-md text-center'>{index+1}</td>
       <td className='border border-gray-700 rounded-md text-center'>{book.title}</td>
       <td className='border border-gray-700 rounded-md text-center'>{book.author}</td>
       <td className='border border-gray-700 rounded-md text-center'>{book.publishYear}</td>
       <td className='border border-gray-700 rounded-md text-center'>
       <div className='flex justify-center gap-x-4'>
       <Link to={`/book/details/${book._id}`}>
       <BsInfoCircle className='text-2xl text-green-600'/>
       </Link>
       <Link to={`/book/edit/${book._id}`}>
       <AiOutlineEdit  className='text-2xl text-yellow-600'/>
       </Link>
       <Link to={`/book/delete/${book._id}`}>
       <MdOutlineDelete className='text-2xl text-red-600'/>
       </Link>
       </div>
       </td>
       </tr>
    ))}
    </tbody>
    </table>
    </div>
  )
}

export default BookTable
