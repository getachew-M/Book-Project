import React, { useState } from 'react';
import './create.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const CreatePage = () => {
  const navigate = useNavigate()  
  const [bookData, setBookData] = useState({
    title: '',
    publisher: '',
    authors: '',
    publishYear:''
  });

  const handleChange = (e) => {
    
    const {name,value} = e.target;
    setBookData(prevBookData => ({
      ...prevBookData,
      [name]: value
    }));
    
  };
  // Handle form submit
  const handleSubmit = (e) => {
    console.log('Submitted the form',e);
    e.preventDefault();
    axios.post('http://localhost:7070/api/books/books', bookData)
      .then(response => {
        console.log('Form submitted successfully', response.data);
      })
      .catch(error => {
        console.error('Error submitting form', error);
      });
      setBookData('');
    navigate('/');
  };
  return (
     <div className="form-container">
        <form >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="publisher">Publisher</label>
            <input
             type="text"
             name="publisher"
             value={bookData.publisher}
             onChange={handleChange}
             className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="authors">Authors</label>
            <input
            type="text" 
            name="authors"
            value={bookData.authors}
            onChange={handleChange}
            className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Publisher Date</label>
            <input
            type="text"
            name="publishYear" 
            value={bookData.publishYear}
            onChange={handleChange}
            className="form-control" />
          </div>
          <Button 
            value="Save"
            handleSubmit={handleSubmit}
            // handleClick={handleClick}
            type="button"           
            className="btn btn-success "/>
        </form>
      </div>
    
  )
}

export default CreatePage;

