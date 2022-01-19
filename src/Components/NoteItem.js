import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  // To Delete a Note

  return (
    <div className="col-md-3" key={note._id}>
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">{note.title}</h6>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>

          <button className="btn btn-primary" onClick={() => updateNote(note)}>
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() => deleteNote(note._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
