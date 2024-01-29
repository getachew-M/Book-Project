import React, { useState, useEffect } from "react";
import CreatePage from "../Create/CreateBook";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import './list.css'
const List = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");
  const { id } = useParams();
  // const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios
      .get("http://localhost:7070/api/books/books")
      .then((res) => { 
        setBookData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  //  Delete Handler
  const handleDelete = (id) => {
    console.log('clicked',id);  
    axios
      .delete(`http://localhost:7070/api/books/books/${id}`)
      .then((res) => { 
        setBookData(bookData.filter(book => book._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="list-container">
      {/* for Seatrch */}
      <form 
      className="d-flex  col-8 p-4 " role="search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search by Title, publisher, Authors, publish Date ..."
          aria-label="Search"
        />
        <button style={{width:'200px',height:'50px'}}
        className="btn btn-primary" type="submit">
          Search
        </button>    
        &nbsp; &nbsp; &nbsp; &nbsp;      
        {!showForm && (
        <Link style={{float: 'right', marginRight: '20px',width:'300px',height:'50px'}}
          to={"/create"}
          onClick={() => setShowForm(true)}
          className="btn btn-primary">
             &nbsp; + New Book 
        </Link>
      )} &nbsp; &nbsp; &nbsp; &nbsp; 
       <Button value="Sort" />
      </form>
     
      {/* Making a table */}
      
      <table className="table table-striped" style={{ textAlign: "left" }}>
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Authore</th>
            <th scope="col">Publisher</th>
            <th scope="col">Publisher Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookData
            .filter((books) => {
              return search.toLowerCase() === ""
                ? books
                : books.title.toLowerCase().includes(search) ||
                  books.authors.toLowerCase().includes(search) || 
                  books.publisher.toLowerCase().includes(search) ||
                  books.publishYear.toLowerCase().includes(search);
            })
            .map((books) => (
              <tr key={books._id}>
                <td>{books._id}</td>
                <td>{books.title}</td>
                <td>{books.authors}</td>
                <td>{books.publisher}</td>
                <td>{books.publishYear}</td>
                <td>
                  <Link 
                    onClick={() => setShowForm(true)}
                    {...(showForm && <CreatePage />)}
                    className="btn btn-success"
                    to={`/edit/${books._id}`}
                  >
                    Edit
                  </Link>{" "}
                  <button 
                  onClick={() => handleDelete(books._id)} 
                  className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* Showing create button and after clicked will route to create page  */}
      
      {showForm && <CreatePage />}
    </div>
  );
};

export default List;
