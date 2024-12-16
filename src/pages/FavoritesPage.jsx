import React from 'react';
import { motion } from 'framer-motion';
import Card from "../components/Card";
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='bg-gradient-to-br from-pink-100 to-purple-100 flex-1 p-6 md:p-10 min-h-screen'>
      <div className='max-w-screen-xl mx-auto'>
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className='font-bold text-4xl md:text-6xl my-8 text-purple-800 text-center'>
          My Favorites
        </motion.h1>

        {favorites.length === 0 ? (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className='h-[60vh] flex flex-col items-center justify-center gap-4'>
            <p className='text-xl text-purple-700'><Link to='/'>No favorite recipes yet. Start adding some!</Link></p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {favorites.map((recipe, index) => (
              <Card key={recipe.label} recipe={recipe} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FavoritesPage;

