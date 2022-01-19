import React, { useState } from "react";
import axiosAuth from "../../services/axiosinterceptor";
import NoteContext from "./noteContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoteState = (props) => {
  const HOST = "http://localhost:8000";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  // Const Gets All Notes from API
  const getNotes = async () => {
    const response = () => {
      return axiosAuth({
        url: `/api/notes/fetchallnotes`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
    };
    const test = await response();
    setNotes(test);
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

    const note = await response.json();
    setNotes(notes.concat(note));
  };
  // Delete a Note

  const deleteNote = async (id) => {
    const response = () => {
      return axiosAuth({
        url: `api/notes/deletenote/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
    };
    const newNotes = notes.filter((items) => {
      return items._id !== id;
    });
    setNotes(newNotes);
    const json = await response();
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

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);

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
