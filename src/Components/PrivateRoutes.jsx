import { useLayoutEffect, useState }  from "react";
import { AuthAPI } from "../apis/AuthAPI.js";
function PrivateRoutes({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useLayoutEffect(() => {
    async function verifyAuth() {
      const verifyAuth = await AuthAPI.verifyAuthPost();
      setIsAuthenticated(true);
      return children;
    }
    if(window.location.pathname!== '/Login')  verifyAuth();
  }, []);
  // navigate('/login');

  return (
    <>
    {isAuthenticated ? children : <h1>Loading...</h1>}
    </>
  );

}

export default PrivateRoutes;