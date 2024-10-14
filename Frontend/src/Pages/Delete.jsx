import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate,useParams } from 'react-router-dom'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import axios from 'axios'

function Delete() {

  const [loading,setLoading]=useState(false)
  const navigate= useNavigate()
  const {id}=useParams()

  const handleDelete=()=>{
    setLoading(true)
    axios.delete(`http://localhost:5000/book/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')

    }).catch((error)=>{
      setLoading(false)
      alert('an error happened, please check console')
      console.log(error)
    });
  }

  return (
    <div>
    <div className="ml-14 mt-10">
    <Link to={"/"} className="mt-8 ml-16">
      <IoArrowBackCircleOutline className="text-3xl" />
    </Link>
  </div>
  <div className="flex flex-col border-2 border-red-500 rounded-lg w-[600px] p-4 mx-auto">
    <h3 className='text-2xl ml-10'> Are you sure, you want delete this book?</h3>
    <button className='p-4 bg-red-500 mt-3 w-full font-semibold shadow-xl rounded-lg' onClick={handleDelete}>Delete it </button>
  </div>
    </div>
  )
}

export default Delete
