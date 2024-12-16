import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, CircleHelp } from 'lucide-react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

const DesktopSidebar = () => {
  return (
    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='p-6 border-r min-h-screen w-24 md:w-64 hidden sm:block bg-white shadow-lg'>
      <div className='flex flex-col gap-12 sticky top-6 left-0'>

        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className='flex flex-col items-center md:items-start gap-8'>
          <NavLink to="/" icon={<Home size={24} />} text="Home" />
          <NavLink to="/favorites" icon={<Heart size={24} />} text="Favorites" />
          <NavLink href="https://pooranaselvan.vercel.app/" icon={<CircleHelp size={24} />} text="About" external />
        </motion.ul>
      </div>
    </motion.div>
  );
};

const MobileSidebar = () => {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-4 sm:hidden shadow-lg'>
      <NavLink to="/" icon={<Home size={24} />} mobileOnly />
      <NavLink to="/favorites" icon={<Heart size={24} />} mobileOnly />
      <NavLink href="https://pooranaselvan.vercel.app/" icon={<CircleHelp size={24} />} external mobileOnly />
    </motion.div>
  );
};

const NavLink = ({ to, href, icon, text, external, mobileOnly }) => {
  const content = (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={`flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors duration-200 ${mobileOnly ? '' : 'w-full'}`}>
      {icon}
      {!mobileOnly && <span className='font-semibold hidden md:block'>{text}</span>}
    </motion.div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link to={to}>{content}</Link>;
};

export default Sidebar;

