import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader } from 'lucide-react';
import Card from '../components/Card';

const HomePage = () => {
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDetails = async (query) => {
    setLoading(true);
    setRecipes([]);
    setError(null);

    try {
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      if (!res.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await res.json();
      setRecipes(data.hits.map(hit => hit.recipe));
    } catch (err) {
      setError('An error occurred while fetching recipes. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchDetails(e.target[0].value);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6 md:p-10">
      <div className="max-w-screen-xl mx-auto">
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-6xl font-bold text-center mb-8 text-purple-800">
          Recipe Finder
        </motion.h1>
        <form onSubmit={handleSearchRecipe} className="mb-12">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="relative max-w-2xl mx-auto">
            <input type="text" className="w-full px-6 py-4 text-lg rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter a recipe name..."/>
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition duration-300">
              <Search size={24} />
            </button>
          </motion.div>
        </form>

        <AnimatePresence>
          {error && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-600 text-center mb-4">
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {loading ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-center items-center">
            <Loader className="animate-spin text-purple-600" size={48} />
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {recipes.map((recipe, index) => (
                <motion.div key={recipe.label} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                  <Card recipe={recipe} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {recipes.length === 0 && !loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-center text-gray-600 mt-12">
            <p className="text-xl">No recipes found. Try searching for something else!</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default HomePage;

