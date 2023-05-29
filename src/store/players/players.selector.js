import { createSelector } from "reselect";
export const selectPlayersDataObj = (state) => state.playersDataReducer;

export const selectPlayersData = createSelector(
  [selectPlayersDataObj],
  (playersDataObjSlice) => playersDataObjSlice.playersData
);

export const selectPlayerData = createSelector(
  [selectPlayersDataObj],
  (playersDataObjSlice) => playersDataObjSlice.playerData
);

export const selectPlayerInfoData = createSelector(
  [selectPlayersDataObj],
  (playersDataObjSlice) => playersDataObjSlice.playerInfo
);

export const selectPlayerBattingStateData = createSelector(
  [selectPlayersDataObj],
  (playersDataObjSlice) => playersDataObjSlice.playerBattingState
);

export const selectPlayerBowlingStateData = createSelector(
  [selectPlayersDataObj],
  (playersDataObjSlice) => playersDataObjSlice.playerBowlingState
);

export const selectPlayerSearchString = createSelector(
  [selectPlayersDataObj],
  (playersDataObjSlice) => playersDataObjSlice.playerSearchString
);

export const selectPlayerFilterOption = createSelector(
  [selectPlayersDataObj],
  (playersDataObjSlice) => playersDataObjSlice.playerFilterOption
);
