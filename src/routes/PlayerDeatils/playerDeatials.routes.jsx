import { Fragment } from "react";
import Footer from "../../componet/Footer/footer.componet";
import NavBar from "../../componet/navBar/navBar.componet";
import PlayerInfo from "../../componet/PlayerInfo/player-info.componet";

const PlayerDeatials = () => {
  return (
    <Fragment>
      <NavBar />
      <PlayerInfo />
      <Footer />
    </Fragment>
  );
};

export default PlayerDeatials;
