import React from 'react';
import { Card } from 'flowbite-react';
import NarrativeProps from './@types/NarrativeProps';

const Narrative: React.FC<NarrativeProps> = ({ narrative }) => {
  return (
    <Card className="mb-6 sm:mb-8 text-center w-full max-w-md">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Your Habit Journey</h2>
      <p className="italic text-gray-600 dark:text-gray-400 text-sm sm:text-base">{narrative}</p>
    </Card>
  );
};

export default Narrative;
