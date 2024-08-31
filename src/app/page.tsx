'use client';

import { useDarkMode } from './context/DarkModeContext';
import MoodSelector from './components/MoodSelector';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import Header from './components/Header';
import Heading from './components/Heading';
import Narrative from './components/Narrative';
import HabitEcho from './components/HabitEcho';
import ErrorMessage from './components/ErrorMessage';
import useHabits from './hooks/useHabits';

export default function Home() {
  const { darkMode } = useDarkMode();
  const {
    habits,
    newHabit,
    setNewHabit,
    isFloating,
    setIsFloating,
    floatingDays,
    setFloatingDays,
    strengthMap,
    currentMood,
    setCurrentMood,
    narrative,
    habitEcho,
    errorMessage,
    addHabit,
    toggleHabit,
  } = useHabits();

  const filteredHabits = habits.filter(habit => habit.mood.includes(currentMood));

  return (
    <main className={`flex h-screen flex-col items-center justify-start ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Header />
      <Heading />
      <Narrative narrative={narrative} />
      <HabitEcho habitEcho={habitEcho} />
      <ErrorMessage message={errorMessage} />
      <MoodSelector currentMood={currentMood} setMood={setCurrentMood} />
      <HabitForm 
        newHabit={newHabit} 
        setNewHabit={setNewHabit} 
        isFloating={isFloating} 
        setIsFloating={setIsFloating} 
        floatingDays={floatingDays} 
        setFloatingDays={setFloatingDays} 
        addHabit={addHabit} 
        errorMessage={errorMessage} 
      />
      <HabitList habits={filteredHabits} toggleHabit={toggleHabit} strengthMap={strengthMap} />
    </main>
  );
}