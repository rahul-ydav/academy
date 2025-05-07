import { useEffect } from "react";
import { AuthAPI } from "../apis/AuthAPI.js";
import { useNavigate } from "react-router-dom";

function Logout() {
    
    const navigate = useNavigate();
    useEffect(() => {
        (async() => {
            const result = await AuthAPI.logoutPost();
            navigate('/Login');
        })();
        // window.location.href = '/login'; // Redirect to login if not logged in
    });
    
}

export default Logout;