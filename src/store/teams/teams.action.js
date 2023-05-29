import { TEAMS_ACTION_TYPE } from "./teams.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setTeamsDataSuccess = (teamsData) =>
  createAction(TEAMS_ACTION_TYPE.FATCH_TEAMS_DATA_SUCCESS, teamsData);

export const setTeamsDataFailed = (error) =>
  createAction(TEAMS_ACTION_TYPE.FATCH_TEAMS_DATA_FAILED, error);

export const setTeamDataSuccess = (teamData) =>
  createAction(TEAMS_ACTION_TYPE.FATCH_TEAM_DATA_SUCCESS, teamData);

export const setTeamDataFailed = (error) =>
  createAction(TEAMS_ACTION_TYPE.FATCH_TEAM_DATA_FAILED, error);
