import React from "react";
import { useNotesContext } from "../utils/hooks/useNotesContext";
import { useAuthContext } from "../utils/hooks/useAuthContext";
// react-icons
import { MdDeleteOutline } from "react-icons/md";

export default function Delete({ note }) {
  const { user } = useAuthContext();
  const { dispatch } = useNotesContext();
  const Delete = async () => {
    if (!user) {
      return;
    }
    const response = await fetch(`https://notes-app-api-jnb0.onrender.com/api/notes/${note._id}`, {
      method: "DELETE",
      headers: { Authorization: `bearer ${user.token}` },
    });
    const json = await response.json();

    if (response.ok) {
      console.log("successfuly deleted");
      dispatch({ type: "DELETE_NOTE", payload: json.data });
    }
  };
  return (
    <div>
      <button onClick={Delete}>
        <MdDeleteOutline className="text-green-500 h-6 w-6 hover:text-red-600 cursor-pointer" />
      </button>
    </div>
  );
}
