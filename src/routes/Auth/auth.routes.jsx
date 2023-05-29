import { useLocation } from "react-router-dom";
import LoginForm from "../../componet/loginForm/login-form.comonet";
import RegistrationForm from "../../componet/RegistrationForm/registration-form.compont";
import "./auth.stlye.css";
const Auth = () => {
  const location = useLocation();
  return (
    <div>
      {(location.pathname === "/login" || location.pathname === "/") && (
        <LoginForm />
      )}
      {location.pathname === "/registration" && <RegistrationForm />}
    </div>
  );
};
export default Auth;
