import React from 'react'
import {NavLink} from 'react-router-dom'
const NavElement = () => {
  return (
    <div>
      <ul className="grid grid-cols-4 justify-items-center">
        <li className=" h-[100%] p-5 text-center hover:bg-orange-400 text-2xl rounded-md flex-1">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className=" h-[100%] p-5 text-center hover:bg-orange-400 text-2xl rounded-md flex-1">
          <NavLink>Our Team</NavLink>
        </li>
        <li className=" h-[100%] p-5 text-center  hover:bg-orange-400 text-2xl rounded-md flex-1">
          <NavLink>Product</NavLink>
        </li>
        <li className=" h-[100%] p-5 text-center  hover:bg-orange-400 text-2xl rounded-md flex-1">
          <NavLink>About Us</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavElement
