import React, { useState } from "react";
import NoteContext from "./noteContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NoteState = (props) => {
  const HOST = "http://localhost:8000";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  // Const Gets All Notes from API
  const getNotes = async () => {
    const response = await fetch(`${HOST}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  // To Add a New Note

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${HOST}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    let note = {
      _id: "61e556b6699bca2b3b644bab7",
      user: "61e50e51267093d4ce082d82",
      title: title,
      description: description,
      tag: tag,
      date: "2022-01-17T11:44:54.617Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    const json = await response.json();
    console.log(json);
  };
  // Delete a Note

  const deleteNote = async (id) => {
    const response = await fetch(`${HOST}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const newNotes = notes.filter((items) => {
      return items._id !== id;
    });
    setNotes(newNotes);
    const json = await response.json();
    console.log(json);
    toast.error("Note Deleted");
  };

  // Edit a Note

  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${HOST}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }

    toast.success("Successfully Updated ");
  };

  // Logic To Edit Client

  return (
    <>
      <NoteContext.Provider
        value={{ notes, addNote, deleteNote, editNote, getNotes }}
      >
        {props.children}
      </NoteContext.Provider>
      <ToastContainer />
    </>
  );
};
export default NoteState;
