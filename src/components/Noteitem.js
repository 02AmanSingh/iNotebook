import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className='col-md-3 my-3' >
      <div className="card">
        <div className="card-body">
          <h5 className='card-ttle'>{note.title}</h5>
          <p className='description'>{note.description}</p>
          <button className='mx-2' ><i className="fa-solid fa-trash" onClick={()=>{deleteNote(note._id)}}></i></button>
          <button><i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i></button>
        </div>
      </div>
    </div>
  )
}

export default Noteitem