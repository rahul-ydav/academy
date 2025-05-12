import { useNavigate } from 'react-router-dom';

function Navigator({ path }) {
    const navigate = useNavigate();
    someExternalFunction(() => navigate('/home'));
}


// function Navigator({ onNavigate }) {
//     const handleNavClick = (page) => {
//         onNavigate(page);
//     };
    
//     return (
//         <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
//         <button onClick={() => handleNavClick('FrontPage')}>Profile</button>
//         <button onClick={() => handleNavClick('Lessons')}>Topics</button>
//         <button onClick={() => handleNavClick('Progress')}>Progress</button>
//         <button onClick={() => handleNavClick('Logout')}>Logout</button>
//         </div>
//     );
// }

export default Navigator;