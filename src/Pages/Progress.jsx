
import React, { use, useContext } from 'react';
import LessonsContext from '../Context/LessonContext.jsx';
import LessonsData from '../assets/LessonsData.json';

function Progress() {
    const levels = useContext(LessonsContext);
    let easyCount = 0;
    let mediumCount = 0;
    let hardCount = 0;

    LessonsData.forEach(lesson => {
        lesson.tableData.forEach(e => {
            if (e.level === 'Easy') {
                easyCount++;
            } else if (e.level === 'Medium') {
                mediumCount++;
            } else if (e.level === 'Hard') {
                hardCount++;
            }
        });
    });

    const easyPercent = Math.round((levels.easy / easyCount) * 100);
    const mediumPercent = Math.round((levels.medium / mediumCount) * 100);
    const hardPercent = Math.round((levels.hard / hardCount) * 100);
    
    return (
        <section className='section'>
            <div id="Progress">
                <h2>Progress Report</h2>
                <div>Easy: {easyPercent}%</div>
                <div>Medium: {mediumPercent}%</div>
                <div>Hard: {hardPercent}%</div>
            </div>
        </section>
    );
}

export default Progress;