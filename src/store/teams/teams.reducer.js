import { TEAMS_ACTION_TYPE } from "./teams.type";

const INITIAL_STATE = {
  teamsData: [],
  teamData: {},
  error: null,
};

export const teamsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TEAMS_ACTION_TYPE.FATCH_TEAMS_DATA_SUCCESS:
      return {
        ...state,
        teamsData: payload,
      };
    case TEAMS_ACTION_TYPE.FATCH_TEAM_DATA_SUCCESS:
      return {
        ...state,
        teamData: payload,
      };
    case TEAMS_ACTION_TYPE.FATCH_TEAMS_DATA_FAILED:
    case TEAMS_ACTION_TYPE.FATCH_TEAM_DATA_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
