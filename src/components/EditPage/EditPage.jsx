import React, { useEffect, useState } from "react";
import axios from "axios";
import "./edit.css";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {  
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: id,
    title: "",
    authors:"",
    publisher: "",
    publishYear:""
  });
  //  Updating based on their ID
  useEffect(() => {
    axios.get("http://localhost:7070/api/books/books/" + id)
      .then((res) => { 
        setValues({
          ...values,
          title: res.data.title,
          publisher: res.data.publisher,
          authors: res.data.authors,
          publishYear: res.data.publishYear
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:7070/api/books/books/" + id, values)
      .then((res) => { 
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Edit Page</h1>
      <div className="form-container ">
        {/* <form onSubmit={handleSubmit}> */}
        <form  >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={values.title}
              name="title"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              placeholder="Enter Book Title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              value={values.publisher}
              name="publisher"
              onChange={(e) =>
                setValues({ ...values, publisher: e.target.value })
              }
              placeholder="Enter Publisher"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              value={values.authors}
              name="author"
              onChange={(e) => setValues({ ...values, authors: e.target.value })}
              className="form-control"
              placeholder="Enter Number of Pages"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Publisher Year</label>
            <input type="text" 
            value={values.publishYear}
            onChange={(e) => setValues({...values,publishYear: e.target.value})}
            className="form-control" />
          </div>
          <button onClick={handleSubmit}
           style={{width:'200px',height:'50px', marginBottom:'20px'}}
           type="button" className="btn btn-success">
            Save
          </button>
          &nbsp;
        </form>
      </div>
    </>
  );
};

export default EditPage;
