import "./Card.css";

const Card = ({imgSrc, name, description}) => {
    return <>
        <div className="card">
            <img src={imgSrc} alt="constestant" className="contestant_img"/>
            <div className="constestant_intro">
                <h1 className="card_h1">{name}</h1>
                <p className="card_p">{description}</p>
            </div>
        </div>
    </>
}

export default Card;