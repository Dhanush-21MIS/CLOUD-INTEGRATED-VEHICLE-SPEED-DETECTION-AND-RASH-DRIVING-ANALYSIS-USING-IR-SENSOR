import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Navbar from './Navbar.jsx';
import StreetDetailPage from './StreetDetailPage.jsx';
import NotificationPage from './NotificationPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/street/:streetId" element={<StreetDetailPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
