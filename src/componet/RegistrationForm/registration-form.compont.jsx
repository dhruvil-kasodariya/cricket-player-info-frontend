import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInput from "../FormInput/form-input.componet";
import { toast } from "react-toastify";
import { registrationFetchApi } from "../../api/registration.api";
const inialState = {
  username: "",
  useremail: "",
  password: "",
  confirmpassword: "",
};
const RegistrationForm = () => {
  const [userDeatils, setUserDeatils] = useState(inialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDeatils({ ...userDeatils, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { useremail, username, password, confirmpassword } = userDeatils;
    if (
      !username ||
      !useremail ||
      !password ||
      !confirmpassword ||
      !useremail.match(validRegex)
    ) {
      if (!username) {
        toast.error("Pleace,Enter Name", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (!useremail || !useremail.match(validRegex)) {
        if (!useremail) {
          toast.error("Pleace,Enter Email", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if (!useremail.match(validRegex)) {
          toast.error("Enter Vailed Email", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
      if (!password) {
        toast.error("Pleace,Enter Password", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (!confirmpassword) {
        toast.error("Pleace,Enter Confirm Password", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      if (!(password === confirmpassword)) {
        toast.error("Password Doesn't Match", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const { confirmpassword, ...userData } = userDeatils;
        await registrationFetchApi(userData, dispatch, navigate);
        setUserDeatils(inialState);
      }
    }
  };
  const signInClick = () => {
    navigate("/login");
  };

  return (
    <div className="login-box">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          labelName="User Name"
          name="username"
          onChange={handleChange}
        />
        <FormInput
          type="text"
          labelName="User Email"
          name="useremail"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          labelName="Password"
          name="password"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          labelName="Confirm Password"
          name="confirmpassword"
          onChange={handleChange}
        />
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign-Up
        </button>{" "}
        <button onClick={signInClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign-In
        </button>
      </form>
    </div>
  );
};
export default RegistrationForm;
