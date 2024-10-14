import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSave = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.post("http://localhost:5000/book/", data)
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
      <div className="flex flex-col border-2 border-red-500 rounded-lg w-[600px] p-4 mx-auto  shadow-2xl">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
          placeholder="Enter title name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
          placeholder="Enter Author name"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
          placeholder="Enter Year of publish"
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          onClick={handleSave}
          className="p-2 bg-emerald-500 m-8 text-white font-semibold shadow-xl text-xl rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default NewBook;
