import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [bookData, setBookData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { id } = useParams();
    // const [error, setError] = useState(null);

    // Fetch books from the API
    useEffect(() => {        
        axios.get('http://localhost:7070/api/books/books')
            .then(res => setBookData(res.data))            
            .catch(error => console.log(error));
    }, [id]);
      //  Delete Handler
  const deleteBook = (id) => {
    console.log('clicked',id);  
    axios
      .delete(`http://localhost:7070/api/books/books/${id}`)
      .then((res) => { 
        setBookData(bookData.filter(book => book._id !== id));
      })
      .catch((err) => console.log(err));
  };

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
    }
    const signout = (token) => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ bookData,setBookData,
        login,signout ,isAuthenticated,deleteBook}}>
            {children}
        </AuthContext.Provider>
    );
};
