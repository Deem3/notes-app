import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// context
import { useAuthContext } from "./utils/hooks/useAuthContext";

// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

// components

export default function App() {
  const {user} = useAuthContext()
  return (
    <div className="h-screen w-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={user ? <Navigate to='/'/> : <Signup />} />
          <Route path="/signin" element={user ? <Navigate to='/'/> : <Signin />} />
          <Route path="/" element={user ? <Home /> : <Navigate to='/signin'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
