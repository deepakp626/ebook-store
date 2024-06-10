import './App.css'
import ContactInfo from './components/ContactInfo'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={  <Dashboard />} />
          <Route path="about" element={<Dashboard />} />
          <Route path="contact" element={<Dashboard />} />
          <Route path="*" element={<h2>Not fount page</h2>} />
        </Routes>
      </Router>

      <ContactInfo />

    </>
  )
}

export default App
