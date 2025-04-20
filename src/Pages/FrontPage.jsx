import { createContext, useContext, useState } from 'react';

import Login from './Login.jsx';
import Progress from './Progress.jsx';
import Lessons from './Lessons.jsx';

function FrontPage() {
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  return (
    <>
      {/* <Login></Login> */}
      {/* <Progress levels={{easy, setEasy, medium, setMedium, hard, setHard}}></Progress> */}
      <div>MainEasy: {easy}</div>
      <div>MainMedium: {medium}</div>
      <div>MainHard: {hard}</div>
      <Lessons levels={{easy, setEasy, medium, setMedium, hard, setHard}}></Lessons>
    </>
  )
}

export default FrontPage;
