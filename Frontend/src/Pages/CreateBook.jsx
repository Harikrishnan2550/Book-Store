import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import BookCard from '../Home/BookCard';
import BookTable from '../Home/BookTable';


function CreateBook() {

    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    const [showType,setShowType] = useState('table')

    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:5000/book')
        .then((res)=>{
            setBooks(res.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false)
        })
    },[]);

  return (
    <div>
    <div  className='flex justify-center items-center gap-x-4 mt-10'>
    <button className='bg-red-400 hover:bg-sky-600 px-4 py-1 rounded-lg font-semibold' onClick={()=> setShowType('table')}>Table</button>
    <button className='bg-red-400 hover:bg-sky-600 px-4 py-1 rounded-lg font-semibold' onClick={()=> setShowType('card')}>Card</button>
    </div>
    <div className='flex justify-between mr-10 mt-20'>
    <h2 className='mb-8 text-red-600 font-semibold text-[30px] ml-10'>Book Store</h2>
    <Link  to={'/book/create'}>
    <MdOutlineAddToPhotos className='text-3xl '/>
    </Link>
    </div>
    {showType === 'table' ? ( <BookTable books={books}/>)
  : (<BookCard books={books}/>)
   }
    </div>
  )
}

export default CreateBook
