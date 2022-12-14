function Card(props) {
    return (
        <div className="superhero-card">
            <img src={props.url}/>
            <div className="superhero-name">{props.name}</div>
            <div className="superhero-universe">{props.universe}</div>
            <div className="superhero-alterego">{props.alterEgo}</div>
            <div className="superhero-activity">{props.activity}</div>
            <div className="superhero-friends">{props.friends}</div>
            <div className="superhero-superpowers">{props.Superpowers}</div>
            <div className="superhero-more">{props.More}</div>
        </div>
    )
}

export default Card;