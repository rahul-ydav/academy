
import { Router, Routes, Route, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "./Components/History.js";
import Login from './Pages/Login.jsx';
import FrontPage from './Pages/FrontPage.jsx';
import Lessons from './Pages/Lessons.jsx';
import Progress from './Pages/Progress.jsx';
import Logout from './Pages/Logout.jsx';
import Navbar from './Components/Navbar.jsx';
import PrivateRoutes from './Components/PrivateRoutes.jsx';



import './App.css';


function App() {
	return (
		<HistoryRouter history={history}>
			<Navbar></Navbar>
			<Routes>

				<Route path="/FrontPage" element={<PrivateRoutes><FrontPage /></PrivateRoutes>} />
				<Route path="/Lessons" element={<Lessons />} />
				<Route path="/Progress" element={<Progress />} />

				<Route path="/Logout" element={<Logout />} />
				<Route path="/" element={<Login />}>
					<Route path="*" element={<Login />} />
				</Route>
			</Routes>
		</HistoryRouter>
	)
}

export default App
