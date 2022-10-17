import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";




function App() {

  const[notesStorage, setNotesStorage]=useState([]);
  
  function addNote(note){
   setNotesStorage(prevNotes=>{
    return [...prevNotes, note]
   })
  }


  function deleteNote(id){
    setNotesStorage(prevNotes=>{
      return prevNotes.filter((noteItems, index)=>{
        return index !== id;
      })
    })

  }

  return(
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesStorage.map((noteItems,  index)=>{
        return <Note onDelete={deleteNote} key={index} id={index} title={noteItems.title} content={noteItems.content} />
      })}
      <Footer />
    </div>
      );
}


export default App;