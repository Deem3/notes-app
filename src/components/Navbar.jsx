import React from "react";
import { Link } from "react-router-dom";
import { useSignout } from "../utils/hooks/useSignout";
import { useAuthContext } from "../utils/hooks/useAuthContext";
// react icons
import { FaRegStickyNote } from "react-icons/fa";
import {SlLogout} from 'react-icons/sl'

export default function Navbar() {
  const {user} = useAuthContext()
  const {signout} = useSignout()

  const handleClick = () => {
    signout()
  }
  return (
    <div className="w-full bg-white h-32 shadow-md flex items-center">
      <div className="flex justify-between w-full">
        <div className="container mx-auto flex items-center">
          <FaRegStickyNote className="h-12 w-12 mx-3" />
          <Link className="text-3xl font-bold font-lobster" to="/">
            Notes App
          </Link>
        </div>
        <div className="flex items-center gap-x-3">
        <div className="font-abel text-2xl">{user.email}</div>
        <div className="flex items-center mr-12 hover:text-green-500 bg-gray-200 rounded-lg shadow px-2 hover:bg-gray-100 w-[110px]" onClick={handleClick}>
          <button className="font-abel font-semibold text-[18px] mr-2 focus:outline-none">Sign out</button>
        <SlLogout className="h-5 w-5 cursor-pointer"/>
        </div>
        </div>
      </div>
    </div>
  );
}
