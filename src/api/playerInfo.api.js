import axios from "axios";
import {
  setplayerBattingStateDataSuccess,
  setplayerBowlingStateDataSuccess,
  setplayertInfoDataSuccess,
  setplayertInfoDataFailed,
  setplayertBattingStateDataFailed,
  setplayertBowlingStateDataFailed,
} from "../store/players/players.action";
export const key1 = process.env.REACT_APP_API_KEY1;
export const key2 = process.env.REACT_APP_API_KEY2;
export const key3 = process.env.REACT_APP_API_KEY3;

export const getPlayerInfoApi = async (id, dispatch) => {
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`,
    headers: {
      "X-RapidAPI-Key": key2,
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const temp = response.data;
    dispatch(setplayertInfoDataSuccess(temp));
  } catch (error) {
    dispatch(setplayertInfoDataFailed(error));
    console.error(error);
  }
};

//bating
export const getPlayerBattingStateApi = async (id, dispatch) => {
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/batting`,
    headers: {
      "X-RapidAPI-Key": key2,
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const temp = response.data;
    dispatch(setplayerBattingStateDataSuccess(temp));
  } catch (error) {
    dispatch(setplayertBattingStateDataFailed(error));
    console.error(error);
  }
};

//bowing

export const getPlayerBowlingStateApi = async (id, dispatch) => {
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/bowling`,
    headers: {
      "X-RapidAPI-Key": key2,
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const temp = response.data;
    dispatch(setplayerBowlingStateDataSuccess(temp));
  } catch (error) {
    dispatch(setplayertBowlingStateDataFailed(error));
    console.error(error);
  }
};
