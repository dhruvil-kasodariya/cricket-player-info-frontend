import "../CardView/card-view.style.scss";
const PlayerInfoCard = ({
  playerBattingState,
  playerBowingState,
  playerInformation,
}) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {" "}
      <div id="cards">
        <figure className="card card--dark">
          <div className="card__image-container">
            <img
              src={playerInformation.image}
              alt={playerInformation.nickName}
              className="card__image"
            />
          </div>

          <figcaption className="card__caption">
            <h1 className="card__name">{playerInformation.name}</h1>

            <h3 className="card__type">{playerInformation.role}</h3>

            <table className="card__stats">
              <tbody>
                <tr>
                  <th>Birtth Place</th>
                  <td>{playerInformation.birthPlace}</td>
                </tr>
                <tr>
                  <th>DOB</th>
                  <td>{playerInformation.DoB}</td>
                </tr>
                <tr>
                  <th>HEIGHT</th>
                  <td>{playerInformation.height}</td>
                </tr>

                <tr>
                  <th>Nation Team</th>
                  <td>{playerInformation.intlTeam}</td>
                </tr>

                <tr>
                  <th>BAT</th>
                  <td>{playerInformation.bat}</td>
                </tr>
                <tr>
                  <th>BOWL</th>
                  <td>{playerInformation.bowl}</td>
                </tr>
              </tbody>
            </table>
          </figcaption>
        </figure>
      </div>
      <div id="cards">
        <figure className="card card--fairy">
          <figcaption className="card__caption">
            <h1 className="card__name">BATTING STATE</h1>

            <h3 className="card__type">{playerInformation.bat}</h3>

            <table className="card__stats">
              <tbody>
                <tr>
                  <th>Formate</th>
                  <td>{playerBattingState.headers[1]}</td>
                  <td>{playerBattingState.headers[2]}</td>
                  <td>{playerBattingState.headers[3]}</td>
                </tr>

                {playerBattingState.values.map((state,index) => (
                  <tr key={index}>
                    <th>{state.values[0]}</th>
                    <td>{state.values[1]}</td>
                    <td>{state.values[2]}</td>
                    <td>{state.values[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </figcaption>
        </figure>
      </div>
      <div id="cards">
        <figure className="card card--psychic">
          <figcaption className="card__caption">
            <h1 className="card__name">BOWING STATE</h1>

            <h3 className="card__type">{playerInformation.bowl}</h3>

            <table className="card__stats">
              <tbody>
                <tr>
                  <th>Formate</th>
                  <td>{playerBowingState.headers[1]}</td>
                  <td>{playerBowingState.headers[2]}</td>
                  <td>{playerBowingState.headers[3]}</td>
                </tr>

                {playerBowingState.values.map((state,index) => (
                  <tr key={index}>
                    <th>{state.values[0]}</th>
                    <td>{state.values[1]}</td>
                    <td>{state.values[2]}</td>
                    <td>{state.values[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default PlayerInfoCard;
