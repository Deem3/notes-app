import React from "react";

// react icons

// components
import Notes from "../components/Notes";
import Form from "../components/Form";
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex">
        <div className="mt-9">
          <Notes />
        </div>
        <div className="mt-9">
          <Form />
        </div>
      </div>
    </div>
  );
}
