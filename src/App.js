import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithoutNav from './components/Layout/WithoutNav';
import WithNav from './components/Layout/WithNav';
import Register from './components/Register/Register';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import Login from './components/Authentication/Login';
import Admin from './components/Admin/Admin';
import VolunteerList from './components/Admin/VolunteerList';
import Donation from './components/Donation/Donation';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Events from './components/RegisteringEvents/RegisteringEvents';
import AddEvent from './components/Admin/AddEvent';
import DonationSuccess from './components/DonationSuccess/DonationSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />} >
          <Route path="/donation-success" element={ <DonationSuccess />} />
          <Route path='/login' element={<Login />} />
          <Route path='blog' element={ <Blog/> } />
          <Route path='/*' element={<PrivateOutlet />}>
            <Route path='register/:event' element={<Register />} />
            <Route path='events' element={<Events />} />
            <Route path='admin/*' element={<Admin />}>
              <Route index element={<VolunteerList/>} />
              <Route path='addEvent' element={<AddEvent />} />
            </Route>
            <Route path='donation' element={ <Donation /> } />
          </Route>
        </Route>
        <Route element={<WithNav />}>
          <Route path='/' element={< Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
