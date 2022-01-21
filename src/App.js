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
import UserState from "./context/user/UserState";
import RecentDelete from "./components/RecentDelete";




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
        <UserState>
          <Router>
            <div>
              <Navbar />
              <Alert alert={alert} />
              <Routes>
                <Route exact path="/" element={<Home showAlert={showAlert} />} />
                <Route exact path="/dashboard" element={<Dashboard showAlert={showAlert} />} />
                <Route exact path="/login" element={<Login showAlert={showAlert} />} />
                <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
                <Route exact path="/recentdelete" element={<RecentDelete showAlert={showAlert} />} />
              </Routes>
            </div>
          </Router>
        </UserState>
      </Notestate>
    </>
  );
}

export default App;
