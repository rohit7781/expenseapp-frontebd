import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';
import Notestate from './context/notes/NoteState';




function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Notestate>
        <Router>
          <div>
            <Navbar />
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
