import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

function Notes(props) {
  const context = useContext(noteContext);
  let history = useNavigate();
  
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMGJlMDQxZjVkNzMzODFiYzNjNWQwIn0sImlhdCI6MTcwOTI3NjM4Mn0.VpGOIaWmmaIzKgGUuQSuTLPXAeVO7I-3TcifEZWgzVo")){
      getNotes();
    }
    else{
      history('/login');
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refclose = useRef(null);
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  }

  const handleAddNote = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refclose.current.click();
    props.showAlert("Updated Successfully", "success");
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" onClick={handleAddNote} className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes.</h2>
        <div className="container mx-1 ">
        <h4>{notes.length === 0 && "No Notes To Display."}</h4>
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />;
        })}
      </div>
    </>
  )
}

export default Notes;