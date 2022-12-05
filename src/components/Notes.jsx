import React from "react";
import { useEffect } from "react";
import { useAuthContext } from "../utils/hooks/useAuthContext";
// react-icons
// components
import Delete from "../components/Delete";
import { useNotesContext } from "../utils/hooks/useNotesContext";

export default function Notes() {
  const { notes, dispatch } = useNotesContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes", {
        headers: {'Authorization': `bearer ${user.token}`}
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_NOTES", payload: json.data });
      }
    };
    if (user) {
      fetchNotes();
    }
  }, [user, dispatch]);
  return (
    <div className="w-[40rem] ml-40">
      {notes &&
        notes.map((note) => (
          <div>
            <div className="p-4 bg-white rounded-lg shadow my-4 h-fit">
              <div className="flex items-center border-b-2 border-green-500 justify-between">
                <p
                  className="text-2xl font-abel font-semibold capitalize"
                  key={note._id}
                >
                  {note.title}
                </p>
                <Delete note={note} />
              </div>
              <p key={note._id}>{note.info}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
