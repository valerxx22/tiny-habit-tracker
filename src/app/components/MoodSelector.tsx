import { Button } from 'flowbite-react';
import MoodSelectorProps from './@types/MoodSelectorProps';

const MoodSelector: React.FC<MoodSelectorProps> = ({ currentMood, setMood }) => {
  const moodColors = {
    happy: 'bg-green-500',
    neutral: 'bg-yellow-300',
    sad: 'bg-red-500',
  };

  return (
    <div className="mb-6 w-full max-w-md">
      <p className="mb-2 text-center">How are you feeling today?</p>
      <div className="flex justify-center space-x-2">
        {['happy', 'neutral', 'sad'].map((mood) => (
          <Button 
            key={mood}
            onClick={() => setMood(mood as 'happy' | 'neutral' | 'sad')}
            className={`p-2 rounded ${currentMood === mood ? moodColors[mood] : 'bg-gray-300'}`}
            aria-label={`Set mood to ${mood}`}
          >
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;