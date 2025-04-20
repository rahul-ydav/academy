

function Progress({levels}){
    const clickFn1 = (e) =>{
        levels.setEasy(levels.easy+10);
    }
    const clickFn2 = (e) =>{
        levels.setMedium(levels.medium+10);
    }
    const clickFn3 = (e) =>{
        levels.setHard(levels.hard+10);
    }
    return(<>
    <button onClick={clickFn1}>Press Easy</button>
    <button onClick={clickFn2}>Press Medium</button>
    <button onClick={clickFn3}>Press Hard</button>
        <div id="Progress">
            <h2>Progress Report</h2>
            <div>Easy: {levels.easy}%</div>
            <div>Medium: {levels.medium}%</div>
            <div>Hard: {levels.hard}%</div>
        </div>
    </>);
}

export default Progress;