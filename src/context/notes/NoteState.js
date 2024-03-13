import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) =>{
  const host = "http://localhost:5000"
    const notesInitial =[];
    const [notes, setNotes] = useState(notesInitial);


    //Get all notes function....
    const getNotes = async () => {
      //Api call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMGJlMDQxZjVkNzMzODFiYzNjNWQwIn0sImlhdCI6MTcwOTI3NjM4Mn0.VpGOIaWmmaIzKgGUuQSuTLPXAeVO7I-3TcifEZWgzVo"
        }, 
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);
    }


    //Add a Note function
    const addNote = async (title, description, tag) => {
      //Api call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMGJlMDQxZjVkNzMzODFiYzNjNWQwIn0sImlhdCI6MTcwOTI3NjM4Mn0.VpGOIaWmmaIzKgGUuQSuTLPXAeVO7I-3TcifEZWgzVo"
        },
        body: JSON.stringify({title, description, tag}), 
      });

      const note = {
        "_id": "65e724e3d30s5fve29b902db4a5",
        "user": "65e0be041f5d73381bc3c5d0",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2024-03-05T13:57:55.209Z",
        "__v": 0
      };
      setNotes(notes.concat(note));
    }



    //Edit a Note function...
    const editNote = async (id, title, description, tag) => {
      //Api call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMGJlMDQxZjVkNzMzODFiYzNjNWQwIn0sImlhdCI6MTcwOTI3NjM4Mn0.VpGOIaWmmaIzKgGUuQSuTLPXAeVO7I-3TcifEZWgzVo"
        },
        body: JSON.stringify({title, description, tag}), 
      });
      const json = response.json(); 
      // console.log(json);
    
      //Logic to edit client
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    }


    //Delete a Note function...
    const deleteNote = (id) => {
      console.log("Deleting note with id" + id);
      const newNotes = notes.filter((note)=>{ return note._id !== id });
      setNotes(newNotes);
    }

    return(
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}


export default NoteState;