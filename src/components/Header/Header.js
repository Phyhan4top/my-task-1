import React from 'react'
import NavElement from './NavElement'
import ExplicitIcon from "@mui/icons-material/Explicit";
import { SvgIcon } from '@mui/material';
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between bg-white justify-items-end m-auto">
      <div className="">
        <img src="/Resources/vecteezy_community-logo-design-vector_7636859.jpg" width={100} height={30}/>
      </div>
      <NavElement />
      <div>
        <ul className="flex w-[300px] h-[70px] justify-center items-center">
          <li className="w-[150px] h-[100%] p-5 text-center  hover:bg-orange-400 text-2xl rounded-md">
            <NavLink to={'/login'}>Log in</NavLink>
          </li>
          <li className="w-[150px] h-[100%] p-5 text-center  hover:bg-orange-400 text-2xl rounded-md">
            <NavLink to={'/signup'}>Sign up</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header
