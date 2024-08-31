import { useState, useEffect } from 'react';
import Habit from '../components/@types/Habit';

const useHabits = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState('');
  const [isFloating, setIsFloating] = useState(false);
  const [floatingDays, setFloatingDays] = useState(1);
  const [strengthMap, setStrengthMap] = useState<{ [key: number]: number }>({});
  const [currentMood, setCurrentMood] = useState<'happy' | 'neutral' | 'sad'>('neutral');
  const [narrative, setNarrative] = useState<string>('Your habit journey begins here...');
  const [habitEcho, setHabitEcho] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const savedHabits = localStorage.getItem('habits');
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
    updateStrengthMap();
    updateNarrative();
    generateHabitEcho();
  }, [habits]);

  const updateStrengthMap = () => {
    const newStrengthMap: { [key: number]: number } = {};
    habits.forEach(habit => {
      newStrengthMap[habit.id] = habit.connections.filter(id =>
        habits.find(h => h.id === id)?.completed
      ).length;
    });
    setStrengthMap(newStrengthMap);
  };

  const updateNarrative = () => {
    const completedHabits = habits.filter(h => h.completed);
    const totalStrength = Object.values(strengthMap).reduce((a, b) => a + b, 0);

    let newNarrative = '';
    if (completedHabits.length === 0) {
      newNarrative = 'Your journey awaits! Complete your first habit to begin your story.';
    } else if (completedHabits.length === 1) {
      newNarrative = `You've taken your first step with ${completedHabits[0].name}. A great adventure begins!`;
    } else {
      newNarrative = `Your dedication to ${completedHabits.map(h => h.name).join(', ')} is shaping your story. `;
      if (totalStrength > 5) {
        newNarrative += 'Your habits are forming a powerful alliance, making you stronger each day!';
      } else {
        newNarrative += 'Keep going, your habits are starting to reinforce each other!';
      }
    }
    setNarrative(newNarrative);
  };

  const generateHabitEcho = () => {
    const completedHabits = habits.filter(h => h.completed && h.lastCompletedDate);
    if (completedHabits.length > 0) {
      const randomHabit = completedHabits[Math.floor(Math.random() * completedHabits.length)];
      const randomBenefit = randomHabit.benefits.length > 0
        ? randomHabit.benefits[Math.floor(Math.random() * randomHabit.benefits.length)]
        : 'Keep up the great work!';
      setHabitEcho(`Remember when you ${randomHabit.name}? ${randomBenefit}!`);
    } else {
      setHabitEcho(null);
    }
  };

  const toggleHabit = (id: number) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed, lastCompletedDate: new Date() } : habit
    ));
  };

  const addHabit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newHabit.trim()) {
      const newId = Date.now();
      const newHabitObj: Habit = {
        id: newId,
        name: newHabit,
        completed: false,
        connections: habits.map(h => h.id),
        mood: ['happy', 'neutral', 'sad'],
        floating: isFloating,
        benefits: [`You will feel great after completing ${newHabit}`],
      };
      if (isFloating) {
        newHabitObj.dueDate = new Date(Date.now() + floatingDays * 24 * 60 * 60 * 1000);
      }
      setHabits([...habits, newHabitObj]);
      setNewHabit('');
      setIsFloating(false);
      setFloatingDays(1);
      setErrorMessage(null);
    } else {
      setErrorMessage('Habit name cannot be empty.');
    }
  };

  return {
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
  };
};

export default useHabits;
