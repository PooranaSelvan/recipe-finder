import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, HeartPulse, Soup } from 'lucide-react';

const Card = ({ recipe, index }) => {
  const getTwoValuesFromArray = (arr) => {
    return [arr[0], arr[1]];
  };

  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites"))?.some(fav => fav.label === recipe.label) || false
  );

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.label === recipe.label);

    if (isRecipeAlreadyInFavorites) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} whileHover={{ scale: 1.05 }} className="flex flex-col rounded-lg bg-white shadow-lg overflow-hidden">
      <a href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`} target='_blank' rel="noopener noreferrer" className='relative h-48'>
        <img className='w-full h-full object-cover cursor-pointer' src={recipe.image} alt={recipe.label} />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-2 shadow-md cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={20} className="text-purple-600" /> 
          <span className="font-semibold">{recipe.yield} Servings</span>
        </div>
        <motion.div whileTap={{ scale: 0.9 }} className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer" onClick={(e) => {e.preventDefault(); addRecipeToFavorites();}}>
          <Heart size={24} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'} />
        </motion.div>
      </a>

      <div className='p-4'>
        <h2 className='font-bold text-xl mb-2 text-purple-800'>{recipe.label}</h2>
        <p className='text-gray-600 mb-4'>{recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Cuisine</p>
        <div className="flex flex-wrap gap-2">
          {healthLabels.map((label, idx) => (
            <div key={idx} className="flex items-center bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
              <HeartPulse size={16} className="mr-1" />
              <span className='font-semibold'>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

