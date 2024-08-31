import { useDarkMode } from '../context/DarkModeContext';
import { Button } from 'flowbite-react';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`flex w-full justify-between items-center p-4 mb-10 bg-white dark:bg-gray-800 sticky top-0 z-50 shadow-md`}>
      <h1 className="text-2xl font-bold text-black dark:text-white">Tiny Habit Tracker</h1>
      <Button 
        onClick={toggleDarkMode} 
        className="bg-gray-200 dark:bg-gray-700 transition duration-300"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? '☀️' : '🌙'}
      </Button>
    </header>
  );
};

export default Header;