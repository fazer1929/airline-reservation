import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
      </Routes>
    </Router>

  );
}

export default App;
