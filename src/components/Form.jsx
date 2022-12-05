import React from "react";
import { useState } from "react";
import { useNotesContext } from "../utils/hooks/useNotesContext";
import { useAuthContext } from "../utils/hooks/useAuthContext";

export default function Form() {
  const { dispatch } = useNotesContext();
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [err, setErr] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setErr("you must be signed in");
      return;
    }
    console.log(title, info);
    const note = { title, info };

    const response = await fetch("api/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setErr(json.error);
      console.log(json.error);
    }
    if (response.ok) {
      setTitle("");
      setInfo("");
      setErr(null);
      console.log("new note added");
      dispatch({ type: "CREATE_NOTE", payload: json.data });
    }
  };
  return (
    <div className="bg-white fixed rounded-lg shadow mx-[25rem] p-12">
      <form onSubmit={handleSubmit}>
        <div className="flex-col items-center flex [&>*]:my-4">
          <p className="text-2xl font-abel font-semibold text-green-500">
            New Note
          </p>
          <div className="relative">
            <input
              className="border-b focus:border-b-2 transition-colors py-1 focus:outline-none focus:border-green-600 peer placeholder-transparent"
              id="title"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label
              className="absolute left-0 text-green-500 cursor-text peer-placeholder-shown:text-gray-500 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:top-1 -top-2 transition-all"
              htmlFor="title"
            >
              Title
            </label>
          </div>
          <div className="relative">
            <input
              className="border-b focus:border-b-2 transition-colors py-1 focus:outline-none focus:border-green-600 peer placeholder-transparent"
              id="description"
              placeholder="Description"
              type="text"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
            <label
              className="absolute left-0 text-green-500 cursor-text peer-placeholder-shown:text-gray-500 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:top-1 -top-2 transition-all"
              htmlFor="description"
            >
              Description
            </label>
          </div>
          <button className="bg-white rounded-md shadow p-2 hover:text-green-500">
            Create a new note
          </button>
          {err && <div>{err}</div>}
        </div>
      </form>
    </div>
  );
}
