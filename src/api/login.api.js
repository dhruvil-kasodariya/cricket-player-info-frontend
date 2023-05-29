import { loginUrl } from "./apiUrl.api";
import { signInSuccess, signInFailed } from "../store/user/user.action";
import { toast } from "react-toastify";

export const loginFetchApi = async (userData, dispatch, navigate) => {
  console.log(userData)
  const data = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(userData),
  })
    .then(async (response) => {
      let temp = await response.json();
      if (response.status === 200) {
        dispatch(signInSuccess(temp));
        navigate("/home");
        return temp;
      }
      console.log(temp)
      toast.error(temp.messege);
      dispatch(signInFailed(temp));
      return false;
    })
    .catch((e) => {
      console.log(e);
    });
  return data;
};
