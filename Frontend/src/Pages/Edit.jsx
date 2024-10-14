import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Edit() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} =useParams()

   useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5000/book/${id}`)
    .then((res)=>{
      setAuthor(res.data.author);
      setPublishYear(res.data.publishYear);
      setTitle(res.data.title);
      setLoading(false);
    }).catch((error)=>{
      setLoading(false);
      alert('an error happened, please check console')
      console.log(error)
    })
   },[])

  const handleEdit = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.put(`http://localhost:5000/book/${id}`, data)
    .then(() => {
      setLoading(false);
      navigate("/");
    })
    .catch((error) => {
        setLoading(false);
        console.error("Error:", error.response ? error.response.data : error.message);
      });
      
  };
  return (
    <div>
    <div className="ml-14 mt-10">
      <Link to={"/"} className="mt-8 ml-16">
        <IoArrowBackCircleOutline className="text-3xl" />
      </Link>
    </div>
    <div className="flex flex-col border-2 border-red-500 rounded-lg w-[600px] p-4 mx-auto">
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Publish Year</label>
        <input
          type="text"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <button
        onClick={handleEdit}
        className="p-2 bg-teal-500 m-8 text-white font-semibold shadow-xl text-xl rounded-md"
      >
        save
      </button>
    </div>
  </div>
  )
}

export default Edit
