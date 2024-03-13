// import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <div>
          <Navbar />
          <Alert message="This is simple react app." />
          <div className="container" >
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
