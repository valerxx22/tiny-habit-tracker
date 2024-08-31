interface HabitFormProps {
  newHabit: string;
  setNewHabit: (habit: string) => void;
  isFloating: boolean;
  setIsFloating: (isFloating: boolean) => void;
  floatingDays: number;
  setFloatingDays: (days: number) => void;
  addHabit: (e: React.FormEvent) => void;
  errorMessage: string | null;
}

export default HabitFormProps;
