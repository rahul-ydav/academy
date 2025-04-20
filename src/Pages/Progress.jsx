
import React, { use, useContext } from 'react';
import LessonsContext from '../Context/LessonContext.jsx';

function Progress() {
    const levels = useContext(LessonsContext);
    return (
        <section className='section'>
            <div id="Progress">
                <h2>Progress Report</h2>
                <div>Easy: {levels.easy}%</div>
                <div>Medium: {levels.medium}%</div>
                <div>Hard: {levels.hard}%</div>
            </div>
        </section>
    );
}

export default Progress;