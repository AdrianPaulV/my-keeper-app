import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteForm from "./NoteForm";

export default function App() {
  const [notes, setNotes] = useState([]);

  function retrieveNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  const publishedNotes = notes.map((noteItem, index) => (
    <Note
      key={index}
      id={index}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}
    />
  ));

  return (
    <div>
      <Header />
      <NoteForm onAdd={retrieveNote} />
      {publishedNotes}
      <Footer />
    </div>
  );
}
