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
    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}


export default NoteState;