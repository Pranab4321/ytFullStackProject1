import "./index.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Service} from "./pages/Service.jsx";
import {Login} from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Error } from "./pages/Error.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
