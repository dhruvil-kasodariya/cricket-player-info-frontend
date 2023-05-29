import axios from "axios";
import {
  setTeamsDataSuccess,
  setTeamsDataFailed,
} from "../store/teams/teams.action";
import { teamsDataUrl } from "./apiUrl.api";
export const teamNameFetchApi = async (dispatch) => {
  const response = await axios.get(teamsDataUrl);
  const data = await response.data;
  if (response.status === 200) {
    dispatch(setTeamsDataSuccess(data));
  } else {
    dispatch(setTeamsDataFailed(response));
  }

  return data;
};
