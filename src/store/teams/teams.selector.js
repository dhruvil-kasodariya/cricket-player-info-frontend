import { createSelector } from "reselect";
export const selectTeamsDataObj = (state) => state.teamsDataReducer;

export const selectTeamsData = createSelector(
  [selectTeamsDataObj],
  (teamsDataObjSlice) => teamsDataObjSlice.teamsData
);

export const selectTeamData = createSelector(
  [selectTeamsDataObj],
  (teamsDataObjSlice) => teamsDataObjSlice.teamData
);
