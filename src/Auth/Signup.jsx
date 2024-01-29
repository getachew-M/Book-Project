

const Signup = () => {
    
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form >
          <div className="mb-3">
            <label htmlFor="firstName">
              <strong>First Name</strong>
            </label>
            <input             
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">
              <strong>Last Name</strong>
            </label>
            <input             
              type="text"
              placeholder="Enter LastName"
              name="lastName"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>User Name</strong>
            </label>
            <input             
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
              type="password"
              placeholder="Enter Password"
              name="password"          
              className="form-control rounded-0"
            />
          </div>
         
          <button 
          className="btn btn-success w-100 rounded-5 text-decoration-none">
            Login
          </button>
           
        </form>
      </div>
    </div>
  )
}

export default Signup
