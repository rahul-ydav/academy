import { useLayoutEffect }  from "react";
import { AuthAPI } from "../apis/AuthAPI.js";
import { useNavigate } from "react-router-dom";
function PrivateRoutes({ children }) {

  const navigate = useNavigate();

  useLayoutEffect(() => {
    async function verifyAuth() {
      const verifyAuth = await AuthAPI.verifyAuthPost();
      console.log(verifyAuth);
      return children;
    }
    verifyAuth();
  }, []);
  // navigate('/login');

  return (
    <h1>Private Routes</h1>
  );

}

export default PrivateRoutes;