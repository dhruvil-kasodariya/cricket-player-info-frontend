import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTeamDataSuccess } from "../../store/teams/teams.action";
import { setPlayersDataNull } from "../../store/players/players.action";

import { TeamsPreviewContainer, TeamsPreviewCard } from "./teams-preview.style";
import { Fragment, useEffect } from "react";
import TeamCardView from "../CardView/team-card-view.componet";
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
    <TeamsPreviewContainer
      style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
    >
      {teamsData.map((team, index) => (
        <div key={index} onClick={() => handleClick(team)}>
          <TeamCardView team={team} />
        </div>
      ))}
    </TeamsPreviewContainer>
  );
};

export default TeamsPreview;

// <Fragment>
//     <TeamsPreviewCard
//       key={team._id}
//       imgUrl={team.imageUrl}
//       onClick={() => handleClick(team)}
//     />
//   </Fragment>
