import React from 'react'
import logo from "../../assets/svg/logo.png";



const Header = () => {
  return (
    <section className="my-8">
    <div className="container">
      <div className="navbar flex items-center justify-between">
   
        <div className="logo">
          <img src={logo} alt="logo" className="h-8" />
        </div>

        {/* Menus */}
        <ul className="menus flex space-x-6">
          <li>
            <a
              href="#"
              className="text-gray-700 hover:underline hover:text-blue-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:underline hover:text-blue-600"
            >
              Find a doctor
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:underline hover:text-blue-600">Apps</a>
          </li>
          <li>
            <a href="#"className="text-gray-700 hover:underline hover:text-blue-600">Testimonials</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:underline hover:text-blue-600">About us</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Header