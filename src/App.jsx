
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login.jsx';
import FrontPage from './Pages/FrontPage.jsx';
import Lessons from './Pages/Lessons.jsx';
import Progress from './Pages/Progress.jsx';
import Logout from './Pages/Logout.jsx';
import Navbar from './Components/Navbar.jsx';
import { LessonsProvider } from './Context/LessonContext.jsx';
import PrivateRoutes from './Components/PrivateRoutes.jsx';



import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <LessonsProvider>
      <Routes>
        
          <Route path="/FrontPage" element={<PrivateRoutes><FrontPage /></PrivateRoutes>} />
          <Route path="/Lessons" element={<PrivateRoutes><Lessons /></PrivateRoutes>} />
          <Route path="/Progress" element={<PrivateRoutes><Progress /></PrivateRoutes>} />
        
          <Route path="/Logout" element={<Logout />}/>
          <Route path="/" element={<Login />}>
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
      </LessonsProvider>
    </BrowserRouter>
  )
}

export default App
