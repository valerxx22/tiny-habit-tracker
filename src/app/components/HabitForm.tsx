import { Button, TextInput, Checkbox } from 'flowbite-react';
import HabitFormProps from './@types/HabitFormProps';

const HabitForm: React.FC<HabitFormProps> = ({ 
  newHabit, 
  setNewHabit, 
  isFloating, 
  setIsFloating, 
  floatingDays, 
  setFloatingDays, 
  addHabit, errorMessage }) => {

  return (
    <form onSubmit={addHabit} className="mb-6 w-full max-w-md" aria-label="Add a new habit">
      <TextInput
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Add a new habit"
        required
        className="mb-2"
      />
      <div className="flex items-center mb-2">
        <Checkbox
          checked={isFloating}
          onChange={() => setIsFloating(!isFloating)}
          className="mr-2"
        />
        <span className="text-sm">Floating Habit</span>
        {isFloating && (
          <TextInput
            type="number"
            value={floatingDays}
            onChange={(e) => setFloatingDays(Number(e.target.value))}
            min="1"
            max="7"
            className="w-16 ml-2"
            aria-label="Number of floating days"
          />
        )}
      </div>
      <Button type="submit" className="w-full bg-blue-500 text-white">Add Habit</Button>
      {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
    </form>
  );
};

export default HabitForm;