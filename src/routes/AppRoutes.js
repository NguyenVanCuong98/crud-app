import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from '../pages/Page';
import HomeContent from '../components/HomeContent';
import AboutContent from '../components/AboutContent';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page Component={HomeContent} />} />
        <Route path="/about" element={<Page Component={AboutContent} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
