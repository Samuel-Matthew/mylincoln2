//basic routing in react

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import { BrowserRouter, Routes, Route } from "react-router"

function App() {

    return(
      <BrowserRouter>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      
      <Footer />
      </BrowserRouter>
    )

}

export default App