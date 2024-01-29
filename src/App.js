import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import EditPage from "./components/EditPage/EditPage";
import CreatePage from "./components/Create/CreateBook";
import Login from "./Auth/Login";
import { AuthProvider } from "./BookContext/BookContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Nav />      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
