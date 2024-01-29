import  { useState} from 'react';
import {useNavigate} from 'react-router-dom'
// import Button from '../Button/Button';
import './login.css';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit =  (e) => {
      e.preventDefault();
      console.log(userName,password);
      axios.post('http://localhost:7070/api/login',{userName,password})
      .then(res => { console.log('what is going on...',res);
        
      })        
        setUserName('');
        setPassword('');
        navigate('/');
      // .catch(err => console.log(err))
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form >
          <div className="mb-3">
            <label htmlFor="email">
              <strong>User Name</strong>
            </label>
            <input 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter UserName"
              name="userName"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              name="password"          
              className="form-control rounded-0"
            />
          </div>
         
          <button onClick={handleSubmit}
          className="btn btn-success w-100 rounded-5 text-decoration-none">
            Login
          </button>
           
        </form>
      </div>
    </div>
  )
}

export default Login
