import { createContext, useContext, useState, ReactNode } from 'react';

const DarkModeContext = createContext<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);