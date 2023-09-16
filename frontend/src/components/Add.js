import axios from 'axios';
import React, { useState } from 'react';

function Add() {
  const [image, setimage] = useState(null);
  const [name, setName] = useState('');
  const [price, setprice] = useState('');
  const [author, setAuthor] = useState('');
  const [desc, setDesc] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setimage(selectedFile);
  };

  const handleSubmit = async (e) => {
    console.log('im in handle submit')
    e.preventDefault();
    console.log(name, price, desc, author, image )
    try {
        // add book
        const newBook = {
            name,
            price,
            desc,
            author,
            image: image.name
        }
        const bookRes = await axios.post('http://localhost:5000/books/add', newBook)
        const uploadFileResponse = await axios.post('http://localhost:5000/books/upload', image)
        console.log("🚀 ~ file: Add.js:31 ~ handleSubmit ~ uploadFileResponse:", uploadFileResponse)
        console.log("🚀 ~ file: Add.js:30 ~ handleSubmit ~ bookRes:", bookRes)
        
    } catch (error) {
        console.log("🚀 ~ file: Add.js:23 ~ handleSubmit ~ error:", error)
        
    }
  };

  return (
    <div>
      <h2>Upload Image and Name</h2>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div>
          <label htmlFor="file">Select an Image:</label>
          <input type="file" id="file" accept="image/*" onChange={(e) => setimage(e.target.files[0])} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="name">Description:</label>
          <input type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="name">price:</label>
          <input type="text" id="price" value={price} onChange={(e) => setprice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="name">Author:</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
}

export default Add;
