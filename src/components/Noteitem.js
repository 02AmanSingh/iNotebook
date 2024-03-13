import React from 'react'

const Noteitem = (props) => {
    const {note} = props;
  return (
    <div className='col-md-3 my-3' >
        <div className="card">
          <div className="card-body">
            <h5 className='card-ttle'>{note.title}</h5>
            <p className='description'>{note.description}</p>
            <button className='mx-2' ><i className="fa-solid fa-trash"></i></button>
            <button><i className="fa-solid fa-pen-to-square"></i></button>
          </div>
        </div>
    </div>
  )
}

export default Noteitem