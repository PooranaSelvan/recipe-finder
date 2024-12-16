import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <div className='flex bg-gray-100 min-h-screen'>
      <Sidebar />
      <main className='flex-1 overflow-x-hidden'>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;

