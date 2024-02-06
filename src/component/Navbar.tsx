import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import MainPage from './MainPage'
function Navbar() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default Navbar
