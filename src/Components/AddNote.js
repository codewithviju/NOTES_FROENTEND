import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddNote = () => {
  const [input, setInput] = useState({ title: "", description: "", tag: "" });
  const context = useContext(noteContext);
  const { addNote } = context;

  // handle Input Values

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Notes

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.title === "" || input.description === "" || input.tag === "") {
      toast.error("All Fields Are Required");
    } else {
      addNote(input.title, input.description, input.tag);
      setInput({ title: "", description: "", tag: "" });
      toast.success("New Task Added");
    }
  };
  return (
    <>
      <h1>Add a Note</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={input.title}
            onChange={handleInput}
            minLength={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            minLength={5}
            value={input.description}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={handleInput}
            value={input.tag}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddNote;
