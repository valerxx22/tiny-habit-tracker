interface MoodSelectorProps {
  currentMood: 'happy' | 'neutral' | 'sad';
  setMood: (mood: 'happy' | 'neutral' | 'sad') => void;
}

export default MoodSelectorProps;
