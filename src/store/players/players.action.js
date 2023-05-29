import { PLAYERS_ACTION_TYPE } from "./players.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setplayersDataSuccess = (playersData) =>
  createAction(PLAYERS_ACTION_TYPE.FATCH_PLAYERS_DATA_SUCCESS, playersData);

export const setplayersDataFailed = (error) =>
  createAction(PLAYERS_ACTION_TYPE.FATCH_PLAYERS_DATA_FAILED, error);

export const setplayerDataSuccess = (playerData) =>
  createAction(PLAYERS_ACTION_TYPE.FATCH_PLAYER_DATA_SUCCESS, playerData);

export const setplayerDataFailed = (error) =>
  createAction(PLAYERS_ACTION_TYPE.FATCH_PLAYER_DATA_FAILED, error);

export const setplayertInfoDataSuccess = (playerInfoData) =>
  createAction(
    PLAYERS_ACTION_TYPE.FATCH_PLAYER_INFO_DATA_SUCCESS,
    playerInfoData
  );

export const setplayertInfoDataFailed = (error) =>
  createAction(PLAYERS_ACTION_TYPE.FATCH_PLAYER_INFO_DATA_SUCCESS, error);

export const setplayerBattingStateDataSuccess = (playerBattingStateData) =>
  createAction(
    PLAYERS_ACTION_TYPE.FATCH_PLAYER_BATTING_STATE_DATA_SUCCESS,
    playerBattingStateData
  );

export const setplayertBattingStateDataFailed = (error) =>
  createAction(
    PLAYERS_ACTION_TYPE.FATCH_PLAYER_BATTING_STATE_DATA_FAILED,
    error
  );

export const setplayerBowlingStateDataSuccess = (playerBowlingStateData) =>
  createAction(
    PLAYERS_ACTION_TYPE.FATCH_PLAYER_BOWLING_STATE_DATA_SUCCESS,
    playerBowlingStateData
  );

export const setplayertBowlingStateDataFailed = (error) =>
  createAction(
    PLAYERS_ACTION_TYPE.FATCH_PLAYER_BOWLING_STATE_DATA_FAILED,
    error
  );

export const setplayerSearchString = (searchString) =>
  createAction(PLAYERS_ACTION_TYPE.SET_PLAYER_SEARCH_STRING, searchString);

export const setPlayerFilterOption = (option) =>
  createAction(PLAYERS_ACTION_TYPE.SET_PLAYER_FILTER_OPTION, option);
