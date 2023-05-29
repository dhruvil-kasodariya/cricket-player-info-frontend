import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTeamDataSuccess } from "../../store/teams/teams.action";
import TeamCardView from "../CardView/team-card-view.componet"
import { TeamsPreviewContainer, TeamsPreviewCard } from "./teams-preview.style";
import { Fragment } from "react";
const TeamsPreview = ({ teamsData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (team) => {
    dispatch(setTeamDataSuccess(team));
    // navigate(`/teams/${team.teamName}`);
    navigate("/playersList");
  };
  return (
    <TeamsPreviewContainer>
      {teamsData.map((team,index) => (
<Fragment > 
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