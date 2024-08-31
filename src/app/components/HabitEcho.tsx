import React from 'react';
import { Card } from 'flowbite-react';
import HabitEchoProps from './@types/HabitEchoProps';

const HabitEcho: React.FC<HabitEchoProps> = ({ habitEcho }) => {
  return habitEcho && (
    <Card className="mb-6 sm:mb-8 p-3 sm:p-4 bg-yellow-100 dark:bg-yellow-900">
      <p className="text-yellow-800 dark:text-white text-sm sm:text-base">{habitEcho}</p>
    </Card>
  );
};

export default HabitEcho;