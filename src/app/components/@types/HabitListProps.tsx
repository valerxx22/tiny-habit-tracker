import Habit from "./Habit";

interface HabitListProps {
  habits: Habit[];
  toggleHabit: (id: number) => void;
  strengthMap: { [key: number]: number };
}

export default HabitListProps;
