import { motion } from 'framer-motion';
import { Card, Button } from 'flowbite-react';
import HabitListProps from './@types/HabitListProps';

const HabitList: React.FC<HabitListProps> = ({ habits, toggleHabit, strengthMap }) => {
  return (
    <ul className="w-full max-w-md">
      {habits.map(habit => (
        <motion.li
          key={habit.id}
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-white dark:bg-gray-800">
            <div>
              <span className={`text-sm sm:text-base ${habit.completed ? 'line-through text-gray-400' : 'text-black dark:text-white'}`}>{habit.name}</span>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Strength: {strengthMap[habit.id] || 0} / {habit.connections.length}
              </div>
              {habit.floating && habit.dueDate && (
                <div className="text-xs sm:text-sm text-blue-500 dark:text-blue-300">
                  Due: {habit.dueDate.toLocaleDateString()}
                </div>
              )}
            </div>
            <Button
              onClick={() => toggleHabit(habit.id)}
              className={`mt-2 ${habit.completed ? 'bg-green-500' : 'bg-blue-500'}`}
              aria-label={habit.completed ? 'Mark habit as incomplete' : 'Mark habit as complete'}
            >
              {habit.completed ? 'Completed' : 'Mark Complete'}
            </Button>
          </Card>
        </motion.li>
      ))}
    </ul>
  );
};

export default HabitList;
