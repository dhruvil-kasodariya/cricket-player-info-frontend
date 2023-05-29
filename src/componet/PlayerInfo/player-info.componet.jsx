import PlayerInfoCard from "../PlayerInfoCard/player-info-card.componet";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPlayerData,
  selectPlayerInfoData,
  selectPlayerBattingStateData,
  selectPlayerBowlingStateData,
} from "../../store/players/players.selector";
import { useEffect } from "react";
import {
  getPlayerBattingStateApi,
  getPlayerBowlingStateApi,
  getPlayerInfoApi,
} from "../../api/playerInfo.api";
import Loader from "../Loader/loader.componet";
import NavBar from "../navBar/navBar.componet";

const PlayerInfo = () => {
  const player = useSelector(selectPlayerData);
  const playerInformation = useSelector(selectPlayerInfoData);
  const playerBattingState = useSelector(selectPlayerBattingStateData);
  const playerBowingState = useSelector(selectPlayerBowlingStateData);
  const dispatch = useDispatch();
  useEffect(() => {
    const apiFetch = async () => {
      let id = player.id;
      await getPlayerInfoApi(id, dispatch);
      await getPlayerBattingStateApi(id, dispatch);
      await getPlayerBowlingStateApi(id, dispatch);
    };
    apiFetch();
  }, []);

  return (
    <div>
      {Object.keys(playerInformation).length &&
      Object.keys(playerBattingState).length &&
      Object.keys(playerBowingState).length ? (
        <PlayerInfoCard
          playerInformation={playerInformation}
          playerBattingState={playerBattingState}
          playerBowingState={playerBowingState}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default PlayerInfo;
