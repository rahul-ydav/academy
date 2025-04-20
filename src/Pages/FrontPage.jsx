import { useState } from 'react';

import Progress from './Progress.jsx';
import Lessons from './Lessons.jsx';

function FrontPage() {
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  return (
    <section className='section'>
      <h1>Welcome Vipin</h1>
    </section>
  )
}

export default FrontPage;
