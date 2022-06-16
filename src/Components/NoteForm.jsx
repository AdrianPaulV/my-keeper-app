import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function NoteForm(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [expanded, setExpanded] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function isExpanded() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          ></input>
        )}
        <textarea
          onChange={handleChange}
          onClick={isExpanded}
          name="content"
          placeholder="Take a note..."
          rows={expanded ? 3 : 1}
          value={note.content}
        ></textarea>
        <Zoom in={expanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
