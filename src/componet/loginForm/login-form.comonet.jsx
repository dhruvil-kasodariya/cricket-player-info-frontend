import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../FormInput/form-input.componet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginFetchApi } from "../../api/login.api";
const intialUserData = {
  useremail: "",
  password: "",
};
const LoginForm = () => {
  const [userData, setUserData] = useState(intialUserData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.useremail || !userData.password) {
      if (!userData.useremail) {
        toast.error("Pleace,Enter Name", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (!userData.password) {
        toast.error("Pleace,Enter Email", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      await loginFetchApi(userData, dispatch, navigate);
      setUserData(intialUserData);
    }
  };

  const onNewUserClick = () => {
    navigate("/registration");
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          labelName="UserEmail"
          name="useremail"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          labelName="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="sumbit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign-In
        </button>{" "}
        <button onClick={onNewUserClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          New User
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
