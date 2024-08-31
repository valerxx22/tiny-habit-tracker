interface Habit {
  id: number;
  name: string;
  completed: boolean;
  connections: number[];
  mood: string[];
  floating: boolean;
  dueDate?: Date;
  benefits: string[];
  lastCompletedDate?: Date;
}

export default Habit;
