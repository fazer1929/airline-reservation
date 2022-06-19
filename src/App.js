import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import NavigationBar from './components/NavigationBar';
import AddFlight from './pages/AddFlight';
import SeeFlights from './pages/SeeFlights';

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <NavigationBar />
      <Routes>
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/user" element={<UserDashboard />} />
        <Route exact path="" element={<Login />} />
      </Routes>
=======
      <UserContextProvider>
        <NavigationBar />
        <Routes>
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/user" element={<UserDashboard />} />
          <Route exact path="" element={<Login />} />
          <Route exact path='/admin/add-flight' element={<AddFlight />} />
          <Route exact path='/admin/see-flights' element={<SeeFlights />} />
        </Routes>
      </UserContextProvider>
>>>>>>> 6d4350717e81974356161dbcbc69dd23bc1a2f34
    </Router>

  );
}

export default App;
