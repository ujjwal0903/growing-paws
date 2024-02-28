// import pic from "../../public/CardImages/GP.png"
// import pic from "../CardImages/Labrador-Retriever.jpg"
export default function Card (props){
    let badgeText
    if (props.item.openSpots === 0)
        badgeText = "Not Available"
    else if (props.item.openSpots !== 0)
        badgeText = "Available"

    return (
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`../CardImages/${props.item.coverImg}`} alt="dog" />
            <div className="card-status">
            <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">Name - {props.item.title}</p>
            <p className="card--breed tight-paragraphs">Breed - {props.item.breed}</p>
            <p className="card--age tight-paragraphs">Age - {props.item.age}</p>
            <p className="card--more tight-paragraphs"><span className="bold">More</span>... </p>
            {/* <img src={pic} alt="" /> */}
        </div>
    )
}
