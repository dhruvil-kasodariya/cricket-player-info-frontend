import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTeamDataSuccess } from "../../store/teams/teams.action";
import { setPlayersDataNull } from "../../store/players/players.action";

import { TeamsPreviewContainer, TeamsPreviewCard } from "./teams-preview.style";
import { Fragment, useEffect } from "react";
const TeamsPreview = ({ teamsData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (team) => {
    dispatch(setTeamDataSuccess(team));

    navigate("/playersList");
  };
  useEffect(() => {
    dispatch(setPlayersDataNull());
  }, [dispatch]);
  return (
    <TeamsPreviewContainer>
      {teamsData.map((team, index) => (
        <Fragment>
          <TeamsPreviewCard
            key={team._id}
            imgUrl={team.imageUrl}
            onClick={() => handleClick(team)}
          />
        </Fragment>
      ))}
    </TeamsPreviewContainer>
  );
};

export default TeamsPreview;

//    <div key={index} onClick={() => handleClick(team)}>
// <TeamCardView team={team}/>
//     </div>
