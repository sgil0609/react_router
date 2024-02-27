
import { Routes, Route, Link } from "react-router-dom";
import './index.css'
import Red from "./components/red"
import Blue from "./components/blue"
import Home from "./components/home" 

function App() {

  return (
    <>
    <div id="container">
      <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
   <Routes>
     <Route path="/blue" element={<Blue />} />
     <Route path="/red" element={<Red />} />
     <Route path="/" element={<Home />} />
   </Routes>
</div>
    </div>
    </>
  )
}

export default App
