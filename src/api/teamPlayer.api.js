import {
  setplayersDataSuccess,
  setplayersDataFailed,
} from "../store/players/players.action";
import { teamsPlayersUrl } from "./apiUrl.api";
import axios from "axios";
const getTeamPlayersApi = async (teamId, dispatch) => {
  const responce = await axios.get(`${teamsPlayersUrl}/${teamId}`);
  const data = await responce.data.players;
  if (responce.status === 200) {
    dispatch(setplayersDataSuccess(data));
  } else {
    dispatch(setplayersDataFailed(responce));
  }
  return data;
};

export default getTeamPlayersApi;
