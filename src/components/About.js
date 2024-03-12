import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(noteContext);
  
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div style={{margin: '4rem 0 0 0'}}>
      <h1>This is About {a.state.name} and he is in {a.state.class} </h1>
    </div>
  )
}

export default About