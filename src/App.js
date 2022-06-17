import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>

  );
}

export default App;
