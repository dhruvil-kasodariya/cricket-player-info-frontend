import { registerUrl } from "./apiUrl.api";
import { signUpSuccess, signUpFailed } from "../store/user/user.action";

export const registrationFetchApi = async (userData, dispatch, navigate) => {
  const data = await fetch(registerUrl, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(async (response) => {
      let temp = await response.json();
      if (response.status === 201) {
        dispatch(signUpSuccess(temp));
        navigate("/home");
        return temp;
      }
      dispatch(signUpFailed(temp));
      return false;
    })
    .catch((e) => {
      console.log(e);
    });
  return data;
};
