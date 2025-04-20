
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login.jsx';
import FrontPage from './Pages/FrontPage.jsx';
import Lessons from './Pages/Lessons.jsx';
import Progress from './Pages/Progress.jsx';
import Navbar from './Components/Navbar.jsx';
import { LessonsProvider } from './Context/LessonContext.jsx';


import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <LessonsProvider>
      <Routes>
          <Route path="/FrontPage" element={<FrontPage />} />
          <Route path="/Lessons" element={<Lessons />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/" element={<Login />}>
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
      </LessonsProvider>
    </BrowserRouter>
  )
}

export default App
