import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial =[
        {
          "_id": "65e724e3d305ef29b902db4a5",
          "user": "65e0be041f5d73381bc3c5d0",
          "title": "Rise Up",
          "description": "Wake Up early in the morning.",
          "tag": "Personal",
          "date": "2024-03-05T13:57:55.209Z",
          "__v": 0
        },
        {
          "_id": "65e724e3d30f5ve29b902db4a5",
          "user": "65e0be041f5d73381bc3c5d0",
          "title": "Rise Up",
          "description": "Wake Up early in the morning.",
          "tag": "Personal",
          "date": "2024-03-05T13:57:55.209Z",
          "__v": 0
        },
        {
          "_id": "65e724e3d3w05e29b902bdb4a5",
          "user": "65e0be041f5d73381bc3c5d0",
          "title": "Rise Up",
          "description": "Wake Up early in the morning.",
          "tag": "Personal",
          "date": "2024-03-05T13:57:55.209Z",
          "__v": 0
        },
        {
          "_id": "65e724e3d3sfg05e29b902db4a5",
          "user": "65e0be041f5d73381bc3c5d0",
          "title": "Rise Up",
          "description": "Wake Up early in the morning.",
          "tag": "Personal",
          "date": "2024-03-05T13:57:55.209Z",
          "__v": 0
        },
        {
          "_id": "65e724e3d30f5e29b90b2db4a5",
          "user": "65e0be041f5d73381bc3c5d0",
          "title": "Rise Up",
          "description": "Wake Up early in the morning.",
          "tag": "Personal",
          "date": "2024-03-05T13:57:55.209Z",
          "__v": 0
        },
        {
          "_id": "65e724e3d3a05e2f9b902db4a5",
          "user": "65e0be041f5d73381bc3c5d0",
          "title": "Rise Up",
          "description": "Wake Up early in the morning.",
          "tag": "Personal",
          "date": "2024-03-05T13:57:55.209Z",
          "__v": 0
        },
        {
          "_id": "65e724e3d30s5ve29b902db4a5",
          "user": "65e0be041f5d73381bc3c5d0",
          "title": "Rise Up",
          "description": "Wake Up early in the morning.",
          "tag": "Personal",
          "date": "2024-03-05T13:57:55.209Z",
          "__v": 0
        },
      ]

    const [notes, setNotes] = useState(notesInitial);

    //Add a Note
    const addNote = (title, description, tag) => {
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


    //Edit a Note
    const editNote = () => {

    }

    //Delete a Note
    const deleteNote = (id) => {
      console.log("Deleting note with id" + id);
      const newNotes = notes.filter((note)=>{ return note._id !== id });
      setNotes(newNotes);
    }

    return(
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}


export default NoteState;