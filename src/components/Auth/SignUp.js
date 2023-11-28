import { Button } from '@mui/material';
import React from 'react'

const SignUp = () => {
  return (
    <div className="bg-purple-500 w-full h-screen flex justify-center items-center">
      <div className=" flex-col bg-white w-[30%]  mx-0 my-auto py-20 px-11 shadow-md rounded-xl">
        <h2 className=" text-xl font-[700] mb-3">Sign Up now !</h2>
        <form className="">
          <div className="my-5">
            <label htmlFor="my-email" className="block text-xl font-[700] mb-3">
              Name
            </label>
            <input
              id="my-Name"
              type="text"
              placeholder="Enter your Name"
              required
              aria-describedby="my-helper-text "
              className="w-[100%] border-none box-border rounded-sm border-y-transparent border-y-2 bg-[#f2f2f2] p-4 text-inherit text-xl block focus:invalid:text-[#ff7730] focus:outline-none focus:border-b-[#55c57a] focus:border-b-2 focus:border-none"
            />
          </div>
          <div className="my-5">
            <label htmlFor="my-email" className="block text-xl font-[700] mb-3">
              Email address
            </label>
            <input
              id="my-email"
              type="email"
              placeholder="Enter your email"
              required
              aria-describedby="my-helper-text "
              className="w-[100%] border-none box-border rounded-sm border-y-transparent border-y-2 bg-[#f2f2f2] p-4 text-inherit text-xl block focus:invalid:text-[#ff7730] focus:outline-none focus:border-b-[#55c57a] focus:border-b-2 focus:border-none"
            />
          </div>
          <div className="my-5">
            <label htmlFor="my-phone" className="block text-xl font-[700] mb-3">
              Phone
            </label>
            <input
              id="my-email"
              type="tele"
              placeholder="Phone number"
              required
              aria-describedby="my-helper-text "
              className="w-[100%] border-none box-border rounded-sm border-y-transparent border-y-2 bg-[#f2f2f2] p-4 text-inherit text-xl block focus:invalid:text-[#ff7730] focus:outline-none focus:border-b-[#55c57a] focus:border-b-2 focus:border-none"
            />
          </div>

          <div>
            <label
              htmlFor="my-password"
              className="block text-xl font-[700] mb-3"
            >
              Password
            </label>
            <input
              id="my-password"
              type="password"
              required
              aria-describedby="my-helper-text"
              className="w-[100%] border-none box-border rounded-sm border-y-transparent border-y-2 bg-[#f2f2f2] p-4 text-inherit text-xl block  focus:invalid:text-[#ff7730] focus:outline-none focus:border-b-[#55c57a] focus:border-b-2 focus:border-none mb-4"
              placeholder="Password"
            />
          </div>
          <div>
            <label
              htmlFor="my-password"
              className="block text-xl font-[700] mb-3"
            >
            Confirm Password
            </label>
            <input
              id="my-Confirmpassword"
              type="password"
              required
              aria-describedby="my-helper-text"
              className="w-[100%] border-none box-border rounded-sm border-y-transparent border-y-2 bg-[#f2f2f2] p-4 text-inherit text-xl block  focus:invalid:text-[#ff7730] focus:outline-none focus:border-b-[#55c57a] focus:border-b-2 focus:border-none mb-4"
              placeholder="Confirm your password"
            />
          </div>
          <Button className="block text-xl font-[400] my-5">Sign up</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp
