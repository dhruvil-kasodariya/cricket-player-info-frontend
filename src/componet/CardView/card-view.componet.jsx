import "./card-view.style.scss";
const CardView = ({ player }) => {
  const { role } = player;
  return (
    <div id="cards">
      <figure
        className={
          role === "Batsman"
            ? "card card--fire"
            : role === "All-rounder"
            ? "card card--water"
            : role === "Wicket keeper"
            ? "card card--normal"
            : role === "Bowler"
            ? "card card--grass"
            : "card card--ice"
        }
      >
        <figcaption className="card__caption">
          <h1 className="card__name">{player.name}</h1>

          <h3 className="card__type">{player.role}</h3>

          <table className="card__stats">
            <tbody>
              <tr>
                <th>Batting Style :</th>
                <td>{player.battingStyle}</td>
              </tr>
              <tr>
                <th>Bowling Style :</th>
                <td>{player.bowlingStyle || "-"}</td>
              </tr>
            </tbody>
          </table>
        </figcaption>
      </figure>
    </div>
  );
};

export default CardView;
