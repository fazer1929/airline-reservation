import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import NavigationBar from './components/NavigationBar';
import Reservation from './pages/Reservation';
import SearchFlight from './pages/SearchFlight';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/user" element={<UserDashboard />} />
        <Route exact path="/reservation" element={<Reservation />} />
        <Route exact path="/searchflight" element={<SearchFlight/>} />
        <Route exact path="" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
