import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/Auth/auth.routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./routes/Home/home.routes";
import PlayersPage from "./routes/PlayerPage/player-page.routes";
import PlayerDeatials from "./routes/PlayerDeatils/playerDeatials.routes";

function App() {
  return (
    <Fragment>
      <Routes>
        {["/", "/login", "/registration"].map((path, index) => (
          <Route path={path} element={<Auth />} key={index} />
        ))}
        <Route path="/home" element={<Home />} />
        <Route path="/playersList" element={<PlayersPage />} />
        <Route path="/playerinfo" element={<PlayerDeatials />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
