import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import NavigationBar from './components/NavigationBar';
import AddFlight from './pages/AddFlight';
import SeeFlights from './pages/SeeFlights';
import TicketStatus from './pages/TicketStatus';
import CancelTicket from './pages/CancelTicket';

function App() {
  return (
    <Router>
      <UserContextProvider>
        <NavigationBar />
        <Routes>
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/user" element={<UserDashboard />} />
          <Route exact path="" element={<Login />} />
          <Route exact path='/admin/add-flight' element={<AddFlight />} />
          <Route exact path='/admin/see-flights' element={<SeeFlights />} />
          <Route exact path='/ticket-status' element={<TicketStatus />} />
          <Route exact path='/user/cancel-ticket' element={<CancelTicket />} />

        </Routes>
      </UserContextProvider>
    </Router>

  );
}

export default App;
