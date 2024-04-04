// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Dashboard from './pages/user/Dashboard';
function App() {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user-dashboard" element={<Dashboard/>} />
         
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
