import "./card-view.style.scss";
const TeamCardView =({team})=>{
    return (
        <div id="cards">
            <div className="card__image-container">
            <img
              src={team.imageUrl}
              alt={team.teamSname}
              className="card__image"
            />
          </div>
          <figure
            className= "card card--ice">
            <figcaption className="card__caption">
              <h1 className="card__name">{team.teamName}</h1>
    
              <h3 className="card__type">{team.teamSName}</h3>
    
            
            </figcaption>
          </figure>
        </div>
      );
}

export default TeamCardView