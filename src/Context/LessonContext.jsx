import { createContext, useState } from 'react';

const LessonsContext = createContext();

export function LessonsProvider({ children }) {
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);

  return (
    <LessonsContext.Provider value={{ easy, setEasy, medium, setMedium, hard, setHard }}>
      {children}
    </LessonsContext.Provider>
  );
}

export default LessonsContext;