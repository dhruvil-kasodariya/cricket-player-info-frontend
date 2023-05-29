import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTeamsData } from "../../store/teams/teams.selector";
import { teamNameFetchApi } from "../../api/teamNames.api";
import TeamsPreview from "../../componet/TeamsPreview/teams-preview.componet.jsx";
import Loader from "../../componet/Loader/loader.componet"
import Footer from "../../componet/Footer/footer.componet";
import NavBar from "../../componet/navBar/navBar.componet";

const Home = () => {
  const dispatch = useDispatch();
  const teamsData = useSelector(selectTeamsData);

  useEffect(() => {
    teamNameFetchApi(dispatch);
  }, [dispatch]);

  return (
    <Fragment>
      <NavBar />
      {teamsData.length? <TeamsPreview teamsData={teamsData} />:<Loader />}
     
      <Footer />
    </Fragment>
  );
};

export default Home;
